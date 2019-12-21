<?php

namespace App\Http\Controllers\MyAuth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;

class AuthController extends Controller
{
    public $loginAfterSignUp = true;

    public function isBusy(Request $request){
      $email = $request->email;
      $user = User::where('email', $email)->first();

      return $user->email ?? null;
    }

    public function register(Request $request)
    {
      $user = User::create([
        'name' => $request->name,
        'email' => $request->email,
        'password' => bcrypt($request->password),
      ]);

      $token = auth()->login($user);

      return $this->respondWithToken($token);
    }

    public function login(Request $request)
    {
      $credentials = $request->only(['email', 'password']);

      if (!$token = auth()->attempt($credentials)) {
        return response()->json(['error' => 'Unauthorized'], 401);
      }

      return $this->respondWithToken($token);
    }
    
    public function getAuthUser(Request $request)
    {
        return response()->json(auth()->user());
    }
    
    public function logout()
    {
        auth()->logout();
        return response()->json(['message'=>'Successfully logged out']);
    }
    protected function respondWithToken($token)
    {
      return response()->json([
        'access_token' => $token,
        'token_type' => 'bearer',
        'expires_in' => auth()->factory()->getTTL() * 60
      ]);
    }
}

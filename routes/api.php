<?php

use Illuminate\Http\Request;

Route::post('login', 'MyAuth\AuthController@login');

// Route::post('login', function() {
//     return  response()->json([
//             'message' => 'Create success'
//         ], 201);
// });

<?php

use Illuminate\Http\Request;

Route::post('login', 'MyAuth\AuthController@login');
Route::post('isbusy', 'MyAuth\AuthController@isBusy');

Route::get('news', 'Common\NewsController@index');

// Route::post('login', function() {
//     return  response()->json([
//             'message' => 'Create success'
//         ], 201);
// });

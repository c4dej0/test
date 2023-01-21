<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\BinnacleController;
use App\Http\Controllers\API\VehicleController;
use App\Http\Controllers\API\PersonController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('binnacle')->group(function () {
    Route::get('/',[ BinnacleController::class, 'getAll']);
    Route::post('/',[ BinnacleController::class, 'create']);
    Route::delete('/{id}',[ BinnacleController::class, 'delete']);
    Route::get('/{id}',[ BinnacleController::class, 'get']);
    Route::put('/{id}',[ BinnacleController::class, 'update']);
});

Route::prefix('vehicle')->group(function () {
    Route::get('/',[ VehicleController::class, 'getAll']);
    Route::post('/',[ VehicleController::class, 'create']);
    Route::delete('/{id}',[ VehicleController::class, 'delete']);
    Route::get('/{id}',[ VehicleController::class, 'get']);
    Route::put('/{id}',[ VehicleController::class, 'update']);
});

Route::prefix('person')->group(function () {
    Route::get('/',[ PersonController::class, 'getAll']);
    Route::post('/',[ PersonController::class, 'create']);
    Route::delete('/{id}',[ PersonController::class, 'delete']);
    Route::get('/{id}',[ PersonController::class, 'get']);
    Route::put('/{id}',[ PersonController::class, 'update']);
});
<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

Route::middleware('guest')->group(function(){
    Route::controller(HomeController::class)->group(function(){
        Route::get('/', 'index')->name('home');
    });
});

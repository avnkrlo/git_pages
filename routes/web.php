<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ExperienceController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\ContactController;

Route::middleware('guest')->group(function(){
    Route::controller(HomeController::class)->group(function(){
        Route::get('/', 'index')->name('index');
    });

    Route::controller(ExperienceController::class)->group(function() {
        Route::get('experience', 'index')->name('experience.index');
    });

    Route::controller(ProjectController::class)->group(function() {
        Route::get('project', 'index')->name('project.index');
    });

    Route::controller(AboutController::class)->group(function() {
        Route::get('about', 'index')->name('about.index');
    });

    Route::controller(ContactController::class)->group(function() {
        Route::get('contact', 'index')->name('contact.index');
    });
});

<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SpotController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/',[SpotController::class, 'index']);

Route::get('/spots', [SpotController::class, 'spots']);


Route::get('/spot/{$id}', [SpotController::class, 'spot']);


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


require __DIR__.'/auth.php';

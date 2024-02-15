<?php

use Illuminate\Support\Facades\Route;
use Modules\Admin\App\Http\Controllers\AdminController;
use Modules\Admin\App\Http\Controllers\SubscriptionController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::group([], function () {
//     Route::resource('admin', AdminController::class)->names('admin');
// });

Route::group(['prefix' => 'admin'], function()
{
    Route::get('login',[AdminController::class,'login'])->name('admin-login');
    Route::post('login/check',[AdminController::class,'loginCheck'])->name('adminLoginCheck');
    Route::get('dashboard',[AdminController::class,'adminDashBoard'])->name('AdminDashboard');
    Route::get('subscription',[SubscriptionController::class,'index'])->name('subscription');
    Route::get('subscription-create',[SubscriptionController::class,'create'])->name('Subscription.Create');
    Route::post('subscription-store',[SubscriptionController::class,'store'])->name('Subscription.store');
    

    fefe
    
});
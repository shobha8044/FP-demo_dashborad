<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\CouponsController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('users', [UserController::class,'index'])->name('userList');

Route::get('register',[UserController::class,'registerFrom'])->name('register-from');
Route::post('register',[UserController::class,'register'])->name('register');

Route::get('login',[UserController::class,'loginFrom'])->name('login-from');
Route::post('login',[UserController::class,'login'])->name('login');
Route::middleware(['adminAuth'])->group(function () {
        Route::get('products',[ProductController::class,'index'])->name('Product');
        Route::get('product-create',[ProductController::class,'create'])->name('productCreate');
        Route::post('product-store',[ProductController::class,'store'])->name('productStore');
        // Route::get('/product-edit/{productId}',[ProductController::class,'getEditData'])->name('product.edit');
        Route::post('product-update/{productId}',[ProductController::class,'update'])->name('product.update');


        Route::get('/product-edit/{productId}', function ($slug) {
            return Inertia::render(
                'Product/Edit',
                [
                    'slug' => $slug,
                ]
            );
        })->name('product.edit');

        Route::get('/get-product-edit/{slug}',[ProductController::class,'getEditData']);

        Route::get('/product-delete/{slug}',[ProductController::class,'delete']);

        Route::get('/coupons',[CouponsController::class,'index'])->name('coupons');;
        Route::get('/coupon-create',[CouponsController::class,'create']);
        Route::post('/coupon-store',[CouponsController::class,'store']);
        Route::get('coupons-edit/{couponId}', function ($couponId){
            return Inertia::render(
                'Coupon/Edit',
                [
                    'couponId' => $couponId,
                ]
            );
        });
        Route::get('/get-coupon-edit/{couponId}',[CouponsController::class,'getEditData']);
        Route::post('coupon-update/{couponId}',[CouponsController::class,'update']);
        Route::get('/coupon-delete/{couponId}',[CouponsController::class,'delete']);

});










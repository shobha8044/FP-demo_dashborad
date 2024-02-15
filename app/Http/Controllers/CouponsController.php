<?php

namespace App\Http\Controllers;

use App\Models\Coupon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Carbon\Carbon;


class CouponsController extends Controller
{
    public function index(){

        $coupons = Coupon::orderBy('id','desc')->get();
        return Inertia::render('Coupon/Index',['coupons'=>$coupons]);
    }

    public function create(){

        return Inertia::render('Coupon/Create');
    }

    public function store(Request $request){

        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'discount' => 'required|numeric',
        ]);
        
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        } else {
            $coupon = new Coupon;
            $coupon->name = $request->name;
            $coupon->discount = $request->discount;
            $coupon->save();
        
            $couponNumber = $this->generateCouponCode($coupon->id);
        
            $coupon->code = $couponNumber;
            $coupon->save();
           
            return redirect()->route('coupons');
           
        }

    }
    public function getEditData($couponId){

        $coupon = Coupon::where('id',$couponId)->first();
        return response()->json([
            'coupon' => $coupon
        ]);
    }
    public function update(Request $request ,$couponId){
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'discount' => 'required|numeric',
        ]);
        
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        } else {
            $coupon = Coupon::find($couponId);
            $coupon->name = $request->name;
            $coupon->discount = $request->discount;
            $coupon->save();
        
            $couponNumber = $this->generateCouponCode($coupon->id);
        
            $coupon->code = $couponNumber;
            $coupon->save();
           
            return redirect()->route('coupons');
           
        }
    }

    public function delete($couponId){
      
        $coupon = Coupon::where('id',$couponId)->delete();
        return redirect()->route('coupons');
    }
    public function generateCouponCode($id)
    {
        $year = Carbon::now()->format('Y');
        $productNumber = 'COUPON_' . $year.'00' . $id;

        return $productNumber;
    }
}

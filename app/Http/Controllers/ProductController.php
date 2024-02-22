<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index(){

        $products = Product::orderBy('id','desc')->get();
        return Inertia::render('Product/Index',['products'=>$products]);
    }
    
    public function create(){
         
       return Inertia::render('Product/Create');
    }

    public function store(Request $request){
        
        $product = new Product;
        $product->product_name = $request->product_name;
        $product->slug = Str::slug($request->product_name);
        $product->qty = $request->qty;
        $product->price = $request->price;
    
        if ($request->image) {
            $imageName = time().'.'.$request->image->getClientOriginalExtension();
            $product->image = $imageName;
            $request->image->storeAs('Image/product', $imageName, 'public');
        }
    
        $product->save();
    
        $productNumber = $this->generateProductNumber($product->id);
    
        $product->product_number = $productNumber;
        $product->save();
    
        return redirect()->route('Product');
           
    }
    
   
    public function getEditData($productId)
    {
        $product = Product::where('id',$productId)->first();
        return response()->json([
            'product' => $product
        ]);
    }
    public function update(Request $request ,$productId){

        $validator = Validator::make($request->all(), [
            'product_name' => 'required',
            'qty' => 'required|numeric',
            'price' => 'required|numeric',
        ]);
       
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        } else {
            $product =Product::find($productId);
            $product->product_name = $request->product_name;
            $product->qty = $request->qty;
            $product->price = $request->price;
            $product->save();
            return redirect()->route('Product');
        }

    }
    public function delete($productId){
    
        $product = Product::where('id',$productId)->delete();
        return redirect()->route('Product');
    }
    public function generateProductNumber($id)
    {
        $year = Carbon::now()->format('Y');
        $productNumber = 'PRO_' . $year.'00' . $id;

        return $productNumber;
    }


}

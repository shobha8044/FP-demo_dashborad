<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
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
       $validator = Validator::make($request->all(), [
            'product_name' => 'required',
            'qty' => 'required|numeric',
            'price' => 'required|numeric',
            'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
       
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        } else {
            $product = new Product;
            $product->product_name = $request->product_name;
            $product->slug = Str::slug($request->product_name);
            $product->qty = $request->qty;
            $product->price = $request->price;
            if($request->image){
                $imageName = time().'.'.$request->image->extension();  
                $request->image->storeAs('/public/images', $imageName);
                $product->image = $imageName;
            }
            $product->save();
        
            $productNumber = $this->generateProductNumber($product->id);
        
            $product->product_number = $productNumber;
            $product->save();
        
            return redirect()->route('Product');
        } 
    }
    
   
    public function getEditData($slug)
    {
        $product = Product::where('slug',$slug)->first();
        return response()->json([
            'product' => $product
        ]);
    }
    public function update(Request $request ,$slug){

       

        $validator = Validator::make($request->all(), [
            'product_name' => 'required',
            'qty' => 'required|numeric',
            'price' => 'required|numeric',
            //'image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);
       
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        } else {
            $product =Product::where('slug',$slug)->first();
            $product->product_name = $request->product_name;
            $product->qty = $request->qty;
            $product->price = $request->price;

            if($request->image !==$product->image){
                $image_path = $product->image;  
                if($image_path){
                    $imagePath = public_path('storage/images/'.$product->image);
                    if(File::exists($imagePath)){
                        unlink($imagePath);
                    }
                }
               
                $imageName = time().'.'.$request->image->extension();  
                $request->image->storeAs('/public/images', $imageName);
                $product->image = $imageName;
             }
           
            $product->save();
            
            return redirect()->route('Product');
         }

    }
    public function delete($slug){
    
        $product = Product::where('slug',$slug)->first();
        if($product->image){
            $imagePath = public_path('storage/images/'.$product->image);
            if(File::exists($imagePath)){
                unlink($imagePath);
            }
        }
        
            $product->delete();
        return redirect()->route('Product');
    }
    public function generateProductNumber($id)
    {
        $year = Carbon::now()->format('Y');
        $productNumber = 'PRO_' . $year.'00' . $id;

        return $productNumber;
    }


}

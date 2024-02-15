<?php

namespace Modules\Admin\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
   
    public function adminDashBoard(Request $request){
        return Inertia::render('Admin/Index');
    }
    public function login()
    {
      
        return Inertia::render('Admin/Login');
    }
    public function loginCheck(Request $request){
       
        
        $validator = Validator::make($request->all(), [
            'password' => 'required',
            'email' => 'required|email'
        ]);
        if ($validator->fails()) {
            return back();
        }else{
           
            if (Auth::guard('admin')->attempt(['email' => $request->email, 'password' => $request->password, 'user_role' => '1'])) {
                
              return redirect()->route('AdminDashboard');

            } else {
               return "try agin";
            }
        }
       
    }
    
    
}

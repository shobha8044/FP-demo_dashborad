<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class UserController extends Controller
{
    //
    // public function adminDashBoard(Request $request){
    //     return Inertia::render('Admin/Index');
    // }
    public function index()
    {
        // Here we provide posts from the database to prop that we created in component
        $users = User::where('user_role', 0)->orderBy('id','desc')->get();
        return Inertia::render('Users/Index',['users'=>$users]);
  

        
    }
    public function registerFrom(){
        return Inertia::render('Users/Register');
    }

    public function register(Request $request){

        $validator = Validator::make($request->all(), [
           'email' => 'required|email|unique:users',
           'password' => 'required|min:6',
           'confirm_password'=> 'required|same:password',
           'name'=> 'required',
        ]);
        if ($validator->fails()) {
            return back();
        }else{
          
            $user             = new User;
            $user->name       = $request->name;
            $user->email      = $request->email;
            $user->password   = Hash::make($request->password);
            $user->save();
           
            return "register login successfully";
        }
    }
    public function loginFrom(){
       
        return Inertia::render('Users/Login');
    }

    public function login(Request $request){
        $validator = Validator::make($request->all(), [
            'email' => 'required',
            'password' => 'required|min:6',
           
         ]);
         if ($validator->fails()) {
             return back();
         }else{
           
            if (Auth::attempt(['email' => $request->email, 'password' => $request->password, 'user_role' => 'user'])) {
                
               $data = Auth::user();

              return redirect()->route('userList');
                   
            } else {
                return "try agin";
            }
        }

    }
}     


<?php

namespace Modules\Admin\App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Subscription;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;
use Ramsey\Uuid\Uuid;
class SubscriptionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $data = Subscription::all();
        return Inertia::render('Admin/Subscription/Index',['data'=>$data]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Subscription/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       
       $validator = Validator::make($request->all(), [
            'subscription_pain' => 'required',
            'price' => 'required|numeric',
            'time' => 'required|numeric',
            'time_type' => 'required',
            'product' => 'required_without:channel',
            'channel' => 'required_without:product',

        ]);
    
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        } else {
           $subscription                     = new Subscription;  
           $subscription->uuid               = Uuid::uuid4();
           $subscription->subscription_pain  = $request->subscription_pain;
           $subscription->price              = $request->price;
           $subscription->time               = $request->time;
           $subscription->time_type          = $request->time_type;
           $subscription->product            = $request->product;
           $subscription->channel            = $request->channel;
           $subscription->save();

           return redirect()->route('subscription');
           

        }
    }

    /**
     * Show the specified resource.
     */
    public function show($id)
    {
        return view('admin::show');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return view('admin::edit');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        //
    }
}

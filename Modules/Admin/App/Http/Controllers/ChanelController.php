<?php

namespace Modules\Admin\App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use App\Models\Channel;
use App\Models\ChannelImage;
use App\Models\ChannelVideo;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Validator;

class ChanelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Admin/Chanel/Index');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Chanel/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
  
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
           
        ]);
       
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        } else {
              
            $chanel                = new Channel;
            $chanel->uuid           = Uuid::uuid4();
            $chanel->name           = $request->name;
            $chanel->slug           = Str::slug($request->name);
            $chanel->price          = $request->price;
            $chanel->description    = $request->description;
            $chanel->save();
                   
        }
       
        
            // if ($request->hasFile('images')) {
            //     foreach ($request->file('images') as $image) {
            //         $imageName = time() . '_' . $image->getClientOriginalName();
            //         $image->storeAs('public/Chanel-image', $imageName);
            //         $imgData                = new ChannelImage;
            //         $imgData->uuid          = Uuid::uuid4();
            //         $imgData->name          = $request->image_name;
            //         $imgData->slug          = Str::slug($request->image_name);
            //         $imgData->channel_id    = $chanel->id;
            //         $imgData->description   = $request->description;
            //         $imgData->channel_image = $imageName;
            //         $imgData->save();
            //     }
            // }
                                
            if ($request->hasFile('images')) {
                foreach ($request->file('images') as $image) {
                    // Generate a unique name for the image
                    $imageName = time() . '_' . $image->getClientOriginalName();
                    // Store the image in the desired directory
                    $image->storeAs('public/Chanel-image', $imageName);
                    
                    // Create a new instance of ChannelImage model
                    $imgData = new ChannelImage;
                    $imgData->uuid = Uuid::uuid4();
                    $imgData->name = $request->input('image_name'); // Use input() method to retrieve input data
                    $imgData->slug = Str::slug($request->input('image_name')); // Generate slug
                    $imgData->channel_id = $chanel->id; // Assuming $chanel variable holds the channel id
                    $imgData->description = $request->input('description'); // Get description from input
                    $imgData->channel_img = $imageName; // Set the image name
                    $imgData->save(); // Save the image data to the database
                }
            }
           
        
       
        
        if($request->channel_video){
            $videoName = time().'.'.$request->channel_video->extension();  
            $request->channel_video->storeAs('/public/Chanel-video/', $videoName); 
            $videoData               = new ChannelVideo;
            $videoData->uuid          = Uuid::uuid4();
            $videoData->name          = $request->video_name;
            $videoData->slug           = Str::slug($request->video_name);
            $videoData->channel_id    = $chanel->id;
            $videoData->description   = $request->video_description;
            $videoData->channel_video = $videoName;
            $videoData->save();
        }

        return redirect()->route('chanel');
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

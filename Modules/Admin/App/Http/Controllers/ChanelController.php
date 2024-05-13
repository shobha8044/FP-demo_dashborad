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

       $data = Channel::With(['channelImage','channelVideo'])->orderBy('created_at','desc')->get();
       // return $data;
       return Inertia::render('Admin/Chanel/Index', ['data' => $data]);
      
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
<<<<<<< HEAD
=======
  
>>>>>>> b8f48b15a93706d1723ffdb718c76bfeb3ed2094
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
<<<<<<< HEAD
            'images.*.images' => 'required|array|min:1', 
            'images.*' => 'image|mimes:jpg,jpeg,png,gif,bmp,tif,tiff,svg,webp,avif', 
            'description' => 'required',
            'image_name'  => 'required',
=======
>>>>>>> b8f48b15a93706d1723ffdb718c76bfeb3ed2094
           
        ]);
       
        if ($validator->fails()) {
<<<<<<< HEAD
            // return response()->json(['errors' => $validator->errors()], 422);
           
             return back()->withErrors($validator)->withInput();
=======
            return back()->withErrors($validator)->withInput();
>>>>>>> b8f48b15a93706d1723ffdb718c76bfeb3ed2094
        } else {
              
            $chanel                = new Channel;
            $chanel->uuid           = Uuid::uuid4();
            $chanel->name           = $request->name;
            $chanel->slug           = Str::slug($request->name);
            $chanel->price          = $request->price;
            $chanel->description    = $request->description;
            $chanel->save();
<<<<<<< HEAD
            $images =  $request->file('images');
            if(count($images)>0){
                foreach ($images as $image) {
                    $imageName = '/Chanel-image'.time().'_'.$image->extension();
                    $image->storeAs('public', $imageName);
                    $image->move(public_path('storage/Chanel-image/'), $imageName);
                    
                    $imgData = new ChannelImage;
                    $imgData->uuid = Uuid::uuid4();
                    $imgData->name = $request->image_name;
                    $imgData->slug = Str::slug($request->image_name);
                    $imgData->channel_id = $chanel->id;
                    $imgData->description = $request->image_description??Null;
                    $imgData->channel_image = $imageName;
                    $imgData->save();
                
                }
            }

            $video =  $request->file('channel_videos');
            if(count($video)>0){
                foreach($video as $video){
                    
                    $videoName = '/Chanel-video'.time().'_'.$video->extension();
                    $video->storeAs('public', $videoName);
                    $video->move(public_path('storage/Chanel-video/'), $videoName);

                    $imgData                      = new ChannelVideo;
                    $imgData->uuid                = Uuid::uuid4();
                    $imgData->name                = $request->video_name;
                    $imgData->slug                = Str::slug($request->video_name);
                    $imgData->channel_id          = $chanel->id;
                    $imgData->description         = $request->video_description;
                    $imgData->channel_video       = $videoName;
                    $imgData->save();
                                    
                }

                
            }
        
             return redirect()->route('chanel');
        }

=======
                   
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
>>>>>>> b8f48b15a93706d1723ffdb718c76bfeb3ed2094
    }
       
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

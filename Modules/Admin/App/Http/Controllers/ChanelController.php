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
       //return $data;
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
  
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'description' => 'required',
            'price' => 'required|numeric',
            'images.*.images' => 'required|array|min:1', 
            'images.*' => 'image|mimes:jpg,jpeg,png,gif,bmp,tif,tiff,svg,webp,avif', 
            'description' => 'required',
            'image_name'  => 'required',
           
        ]);
       
        if ($validator->fails()) {
           
            return back()->withErrors($validator)->withInput();
        } else {
              
            $chanel               = new Channel;
            $chanel->uuid         = Uuid::uuid4();
            $chanel->name         = $request->name;
            $chanel->slug         = Str::slug($request->name);
            $chanel->price        = $request->price;
            $chanel->description  = $request->description;
            $chanel->save();
            $images =  $request->file('images');
            if(count($images)>0){
                foreach ($images as $image) {
                    $imageName = 'Chanel-image/'.time().'_'.$image->getClientOriginalName();
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
            $videos = $request->file('channel_videos');
            if(!empty($videos)){
                foreach($videos as $video){
                    $videoName = 'Channel-video/' . time() . '_' . $video->getClientOriginalName(); 
                    $video->storeAs('public', $videoName);
                    $video->move(public_path('storage/Channel-video/'), $videoName); // You don't need to move the file if you're storing it with storeAs().
                    
                    $videoData                = new ChannelVideo;
                    $videoData->uuid          = Uuid::uuid4();
                    $videoData->name          = $request->video_name;
                    $videoData->slug          = Str::slug($request->video_name);
                    $videoData->channel_id    = $chanel->id; // Assuming $chanel is already defined.
                    $videoData->description   = $request->video_description;
                    $videoData->channel_video = $videoName;
                    $videoData->save();                  
                }
            }
            // $videos =  $request->file('channel_videos');
            // //print_r($videos);
            // if(count($videos)>0){
            //     foreach($videos as $video){
            //         $videoName = '/Chanel-video'.time().'_'.$video->extension();
            //         $video->storeAs('public', $videoName);
            //         $video->move(public_path('storage/Chanel-video/'), $videoName);
            //         $videoData                      = new ChannelVideo;
            //         $videoData->uuid                = Uuid::uuid4();
            //         $videoData->name                = $request->video_name;
            //         $videoData->slug                = Str::slug($request->video_name);
            //         $videoData->channel_id          = $chanel->id;
            //         $videoData->description         = $request->video_description;
            //         $videoData->channel_video       = $videoName;
            //         $videoData->save();                  
            //     }
            // }
        
             return redirect()->route('chanel');
        }

    }
       
    public function getEditData($uID)
    {
        $channelData  = Channel::where('uuid',$uID)->first();
        $channelImage = ChannelImage::where('channel_id',$channelData->id)->get();
        $channelVideo = ChannelVideo::where('channel_id',$channelData->id)->get();
        if(!empty($channelData) || !empty($channelImage) || !empty($channelVideo)  ){
            return response()->json([
                'channelData' => $channelData,
                'channelImage' => $channelImage,
                'channelVideo' => $channelVideo,
            ]);
        }
          
    }
    public function update (Request $request)
    {
        return $request->all();

    }
}

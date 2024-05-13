<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Channel extends Model
{
    use HasFactory, SoftDeletes;
   

    public function channelImage (){
        return $this->hasMany(ChannelImage::class,'channel_id','id');
    }
    
    public function channelVideo (){
        return $this->hasMany(ChannelVideo::class,'channel_id','id');
    }
   
}

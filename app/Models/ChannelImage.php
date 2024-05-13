<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChannelImage extends Model
{
    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $appends = [
        'channel_img_url'
    ];

    public function getChannelImgUrlAttribute()
    {
        if (!empty($this->channel_image)) {
            return url('storage'.$this->channel_image);
        }
        return '';
    }

    
}

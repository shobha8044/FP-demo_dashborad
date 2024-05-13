<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ChannelVideo extends Model
{
    use HasFactory, SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $appends = [
        'channel_video_url'
    ];

    public function getChannelVideoUrlAttribute()
    {
        if (!empty($this->channel_video)) {
            return url('storage'.$this->channel_video);
        }
        return '';
    }
}

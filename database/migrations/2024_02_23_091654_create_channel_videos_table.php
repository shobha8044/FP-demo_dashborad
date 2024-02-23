<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('channel_videos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('channel_id');
            $table->uuid('uuid');
            $table->string('name');
            $table->string('slug');
            $table->longText('description')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('channel_videos');
        Schema::table('channel_videos', function(Blueprint $table)
        {
            $table->dropSoftDeletes();
        });
    }
};

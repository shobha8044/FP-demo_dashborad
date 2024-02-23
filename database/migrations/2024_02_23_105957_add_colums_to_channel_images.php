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
        Schema::table('channel_images', function (Blueprint $table) {
            $table->foreignId('channel_id')->after('id');
            $table->uuid('uuid')->after('channel_id');
            $table->string('name')->after('uuid');
            $table->string('slug')->after('name');
            $table->longText('description')->after('slug')->nullable();
            $table->string('channel_image')->after('description')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('channel_images', function (Blueprint $table) {
            //
        });
    }
};

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
        Schema::table('users', function (Blueprint $table) {
          
            $table->integer('status')->comment('1 active, 0 inactive')->default(0)->after('password');
            $table->string('mobile_no')->nullable()->after('status');
            $table->enum('gender', ['male', 'female'])->nullable()->after('mobile_no');
            $table->date('dob')->nullable()->after('gender');
            // Replace 'new_column_name' with your desired column name
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            //
        });
    }
};

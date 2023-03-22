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
        Schema::create('vehicules', function (Blueprint $table) {
            $table->id();
            $table->string('marque');
            $table->string('modele');
            $table->string('img_url')->nullable();
            $table->boolean('control_technique')->default(false);
            $table->boolean('assurance')->default(false);
            $table->enum('essence', ['D', 'SP', 'JET'])->default('D');
            $table->string('immatriculation')->default("XX-000-XX");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vehicules');
    }
};

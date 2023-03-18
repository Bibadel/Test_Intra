<?php

namespace App\Models;

use App\Models\Livraison;
use App\Models\Interimaire\Trajet;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Vehicule extends Model
{
    use HasFactory;

    public function livraisons(): HasMany
    {
        return $this->hasMany(Livraison::class);
    }

    public function trajets(): HasMany
    {
        return $this->hasMany(Trajet::class);
    }
}

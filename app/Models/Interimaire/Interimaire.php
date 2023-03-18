<?php

namespace App\Models\Interimaire;

use App\Models\Interimaire\Trajet;
use App\Models\Interimaire\Contrat;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphOne;

class Interimaire extends Model
{
    use HasFactory;

    public function trajets(): HasMany
    {
        return $this->hasMany(Trajet::class);
    }

    public function contrat(): MorphOne
    {
        return $this->morphOne(Contrat::class, 'contracteable');
    }
}

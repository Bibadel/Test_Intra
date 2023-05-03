<?php

namespace App\Models\Interimaire;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Trajet extends Model
{
    use HasFactory;

    protected $fillable = [
        'tours',
        'prix_tour',
        'quantite_petrole',
    ];

    public function interimaire(){
        return $this->belongsTo(Interimaire::class);
    }
}

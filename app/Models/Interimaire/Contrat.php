<?php

namespace App\Models\Interimaire;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Contrat extends Model
{
    use HasFactory;

    public function contracteable(): MorphTo
    {
        return $this->morphTo();
    }
}

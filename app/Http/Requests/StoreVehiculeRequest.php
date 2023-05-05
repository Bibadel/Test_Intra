<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreVehiculeRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            'marque' => "string",
            'modele' => "string",
            'img_url' => "string",
            'control_technique' => "boolean",
            'assurance' => "boolean",
            'essence' => "in:D,SP,JET",
            'immatriculation' => "unique:vehicules,immatriculation"
        ];
    }
}

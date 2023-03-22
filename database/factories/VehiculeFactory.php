<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicule>
 */
class VehiculeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $number = fake()->numberBetween(100, 999);
        $letter1 = fake()->randomLetter().fake()->randomLetter();
        $letter2 = fake()->randomLetter().fake()->randomLetter();

        $plate = strtoupper($letter1."-".$number."-".$letter2);
        return [
            "marque" => fake()->company(),
            "modele" => fake()->companySuffix(),
            "img_url" => fake()->imageUrl(),
            "control_technique" => fake()->boolean(),
            "assurance" => fake()->boolean(),
            "essence" => fake()->randomElement(["D", "SP", "JET"]),
            "immatriculation" => $plate,    
        ];
    }
}

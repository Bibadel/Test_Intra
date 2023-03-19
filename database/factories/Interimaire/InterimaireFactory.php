<?php

namespace Database\Factories\Interimaire;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Interimaire\Interimaire>
 */
class InterimaireFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            "firstname" => fake()->firstName(),
            "lastname" => fake()->lastName(),
            "birthday" => fake()->dateTimeBetween('-50 years', '-18 years'),
            "permis_pl" => fake()->boolean(),
            "is_blacklist" => fake()->boolean(),
            "created_at" => fake()->dateTimeBetween('-1 years', 'now'),
            "updated_at" => fake()->dateTimeBetween('-1 years', 'now'),       
        ];
    }
}

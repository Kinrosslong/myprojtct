<?php
/**
 * Created by PhpStorm.
 * User: Tumi
 * Date: 2018/5/11
 * Time: 15:17
 */

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Article::class, function (Faker $faker) {
    return [
        'category_id' => $faker->numberBetween(1,9),
        'title' => $faker->sentence,
        'content' => $faker->paragraph
    ];
});
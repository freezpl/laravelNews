<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('categories')->insert([
            ['name' => 'Programming'],
            ['name' => 'C#'],
            ['name' => 'Javascript'],
            ['name' => 'PHP'],
            ['name' => 'High-Tech'],
            ['name' => 'Entertainment']
        ]);
    }
}

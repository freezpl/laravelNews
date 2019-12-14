<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;


class TagsTableSeeder extends Seeder
{
    public function run()
    {
        DB::table('tags')->insert([
            ['name' => 'Programming', 'color' => '#00ff00'],
            ['name' => 'C#', 'color' => '#450032'],
            ['name' => 'Game', 'color' => '#10f032'],
        ]);
    }
}

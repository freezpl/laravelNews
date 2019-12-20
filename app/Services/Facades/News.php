<?php

namespace App\Services\Facades;
use Illuminate\Support\Facades\Facade;

class News extends Facade {

    public static function getFacadeAccessor() {
        return 'news';
    }
}
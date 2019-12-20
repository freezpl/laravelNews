<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\NewsService;

class NewsServiceProvider extends ServiceProvider
{
    public function register()
    {
        
    }

    public function boot()
    {
        // $this->app->bind('App\Services\Contracts\INewsService', function(){
        //     return new NewsService;
        // });
        $this->app->bind('news', function(){
            return new NewsService;
        });
    }
}

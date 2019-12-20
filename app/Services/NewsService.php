<?php
namespace App\Services;
use App\Services\Contracts\INewsService;
use App\Article;
use App\Category;

class NewsService implements INewsService {
    public function getNews(){
        //return Article::all()->load('category');
        return Article::with('category', 'tags')->get();
    }
}

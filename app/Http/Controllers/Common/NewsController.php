<?php

namespace App\Http\Controllers\Common;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use News;

class NewsController extends Controller
{
    protected $news;
    public function __construct(News $news){
        $this->news = $news;
    }

    public function index(Request $request)
    {
        return $this->news::getNews();
    }
}
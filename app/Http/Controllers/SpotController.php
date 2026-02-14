<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class SpotController extends Controller
{
    //

    public function index(){
        return Inertia::render('Index');
    }
}

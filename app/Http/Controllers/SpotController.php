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

    public function spots(){
        return Inertia::render('Spots');
    }

    public function spot(string $id){
        return Inertia::render('Spot');
    }

}

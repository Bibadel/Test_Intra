<?php

namespace App\Http\Controllers;

use App\Models\Interimaire\Interimaire;
use App\Http\Requests\StoreInterimaireRequest;
use App\Http\Requests\UpdateInterimaireRequest;

class InterimaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
     dd('Eh oui');
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInterimaireRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Interimaire $interimaire)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Interimaire $interimaire)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateInterimaireRequest $request, Interimaire $interimaire)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Interimaire $interimaire)
    {
        //
    }
}

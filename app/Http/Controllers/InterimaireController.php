<?php

namespace App\Http\Controllers;

use App\Models\Interimaire\Interimaire;
use App\Http\Requests\StoreInterimaireRequest;
use App\Http\Requests\UpdateInterimaireRequest;
use Inertia\Inertia;

class InterimaireController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Interimaire/Index', [
            'filters' => request()->all('search', 'trashed'),
            'interimaires' => Interimaire::orderBy('nom')
                ->paginate()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Interimaire/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInterimaireRequest $request)
    {
        $validated = $request->validated();
        
        $interimaire = new Interimaire([
            'firstname' => $validated['firstname'],
            'lastname' => $validated['lastname'],
            'birthday' => $validated['birthday'],
            'permis_pl' => $validated['permisPL'],
            'is_blacklist' => $validated['blacklist'],
        ]);

        $interimaire->save();

        return redirect()->route('interimaire.index')->with('success', 'Interimaire créé avec succès.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Interimaire $interimaire)
    {
        return Inertia::render('Interimaire/Show', [
            'interimaire' => $interimaire
        ]);
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

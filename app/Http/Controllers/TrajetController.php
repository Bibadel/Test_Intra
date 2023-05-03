<?php

namespace App\Http\Controllers;

use App\Models\Interimaire\Trajet;
use App\Http\Requests\StoreTrajetRequest;
use App\Http\Requests\UpdateTrajetRequest;
use Inertia\Inertia;

class TrajetController extends Controller
{

    private string $hRoute = "Trajet.Index";
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $trajets = Trajet::all();
        return Inertia::render('Trajet.Index', [
            'trajets' => $trajets
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Intertia::render('Trajet.Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTrajetRequest $request)
    {
        $validation = $request->validate();

        $trajet = new Trajet($request->all());
        $trajet->save();

        return redirect()->route($this->hRoute)->with('success', 'Le trajet à bien été enregistré');
    }

    /**
     * Display the specified resource.
     */
    public function show(Trajet $trajet)
    {
        return Inertia::render('Trajet.Show', [
            'trajet' => $trajet
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Trajet $trajet)
    {
        return Inertia::render('Trajet.Edit', [
            'trajet' => $trajet
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateTrajetRequest $request, Trajet $trajet)
    {
        $trajet->fill($request->all());
        $trajet->save();

        return redirect()->route($this->hRoute)->with('success', "Trajet modifié avec succès");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Trajet $trajet)
    {

        if( auth()->user()->idAdmin){
            $trajet->delete();
            return redirect()->route($this->hRoute)->with('success', 'Trajet supprimé de la base de donnée');
        }else{
            return redirect()->route($this->hRoute)->with('error', 'Seuls les administrateurs de la plateforme peuvent supprimé un trajet');
        }
    }
}

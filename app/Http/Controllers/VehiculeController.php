<?php

namespace App\Http\Controllers;

use App\Models\Vehicule;
use App\Http\Requests\StoreVehiculeRequest;
use App\Http\Requests\UpdateVehiculeRequest;
use Inertia\Inertia;

class VehiculeController extends Controller
{
    private string $hRoute = "vehicule.index";
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehicules =  Vehicule::orderBy('marque')->paginate();
        return Inertia::render('Vehicule/Index', [
            'filters' => request()->all('search', 'trashed'),
            'vehicules' => $vehicules,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Vehicule.Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehiculeRequest $request)
    {
        $validation = $request->validate();

        $vehicule = new Vehicule([
            'marque'  => $request->marque,
            'modele' => $request->modele,
            'img_url' => $request->img,
            'control_technique' => $request->cct,
            'assurance' => $request->assurance,
            'essence' => $request->essence,
            'immatriculation' => $request->immat
        ]);

        $vehicule->save();

        return redirect()->route($this->hRoute)->with('success', 'Véhicule ajouté au garage');

    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicule $vehicule)
    {
        return Inertia::render('Vehicule.Show', [
            'vehicule' => $vehicule
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicule $vehicule)
    {
        return Inertia::render('Vehicule.Edit', [
            'vehicule' => $vehicule
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehiculeRequest $request, Vehicule $vehicule)
    {
       $vehicule = $request->all();
       $vehicule->save();


       return redirect()->route($this->hRoute)->with('success', "Véhicule modifié avec succès");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicule $vehicule)
    {
        $vehicule->delete();
        return redirect()->route($this->hRoute)->with('success', 'Véhicule supprimé de la base de données');
    }
}

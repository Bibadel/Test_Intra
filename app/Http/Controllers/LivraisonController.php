<?php

namespace App\Http\Controllers;

use App\Models\Livraison;
use App\Http\Requests\StoreLivraisonRequest;
use App\Http\Requests\UpdateLivraisonRequest;
use Inertia\Inertia;

class LivraisonController extends Controller
{
    private string $hRoute = "Livraison.Index";
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $livraisons = Livraison::all()->sortBy('name');
        $livraisons->count();
        return Inertia::render('Livraison.Index', [
            'livraisons' => $livraisons
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Livraison.Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreLivraisonRequest $request)
    {
        $validation = $request->validate();

        $livraison  = new Livraison($request->all());
        $livraison->save();

        return redirect()->route($this->hRoute)->with('success', "La livraison à bien été créée sous l'id :".$livraison->id);
    }

    /**
     * Display the specified resource.
     */
    public function show(Livraison $livraison)
    {
        return Inertia::render('Livraison.Show', [
            "livraison" =>  $livraison
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Livraison $livraison)
    {
        return Inertia::render('Livraison.Edit', [
            "livraison" => $livraison
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateLivraisonRequest $request, Livraison $livraison)
    {
        $valdiation = $request->validate();

        $livraison->fill($request->all());

        return redirect()->route($this->hRoute)->with('success', "La livraison ".$livraison->id." à bien été modifié");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Livraison $livraison)
    {
        $livraison->delete();
        return redirect()->route($this->hRoute)->with('success', "La livraison à bien été supprimée");
    }
}

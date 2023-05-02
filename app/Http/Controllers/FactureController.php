<?php

namespace App\Http\Controllers;

use App\Models\Facture;
use App\Http\Requests\StoreFactureRequest;
use App\Http\Requests\UpdateFactureRequest;
use App\Models\Interimaire\Interimaire;
use Inertia\Inertia;

class FactureController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    private  string $hRoute = 'facture.index';

    public function index()
    {
        $invoices = Facture::all();

        return Inertia::render('Facture.Index',[
                'invoices' => $invoices,
                'test' => "Ce n'est qu'un test"
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Interimaire $inte, float $montant)
    {
        return Inertia::render('Facture.Create', [
            'interimaire' => $inte,
            'montant' => $montant
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreFactureRequest $request)
    {
        $validated = $request->validate();

        $facture = new Facture($request);
        $facture->save();

        return redirect()->route($this->hRoute)->with('success', 'Facture créé avec succès');
    }

    /**
     * Display the specified resource.
     */
    public function show(Facture $facture)
    {
        return Inertia::render('Facture.Show', [
            'facture' => $facture,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Facture $facture)
    {
        return Inertia::render('Facture.Edit', [
            'facture' => $facture
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateFactureRequest $request, Facture $facture)
    {
        $validation = $request->validate();
        $facture = request()->all();

        $facture->save();

        return redirect()->route($this->hRoute)->with('success', 'La facture à été modifié');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Facture $facture)
    {
        $facture->delete();
        return redirect()->route($this->hRoute)->with('success', 'Facture détruite');
    }
}

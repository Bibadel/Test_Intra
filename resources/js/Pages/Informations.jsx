import { Link, Head } from '@inertiajs/react';
import ApplicationButton from '@/Components/Navigation/ApplicationButton';

export default function Informations(props) {
    console.log(props)
    return (
        <>
            <Head title="Informations" />
            <header>
                <div class="py-5 px-5 pl-5 flex items-left justify-center h-16">
                    <ApplicationButton />
                    <img src={`${props.ziggy.url}/storage/assets/Logo.png`} alt="Logo Total Ouessant" class="pl-5 h-10 w-auto"/>
                </div>
            </header>

            <div class="container mx-auto px-4 py-12">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Carte */}
                    <div class="relative bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                        <div class="flex items-center space-x-4">
                            <img src="https://images.unsplash.com/photo-1573496790974-8e0cf4f4b6d3?auto=format&fit=crop&w=64&h=64&q=80" alt="Exemple de véhicule" class="w-32 h-20 rounded-lg" />
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">Audi A4</h3>
                                <p class="text-gray-600">Année : 2021</p>
                                <p class="text-gray-600">Kilométrage : 15 000 km</p>
                                <p class="text-gray-600">Carburant : Essence</p>
                                <p class="text-gray-600">Prix : 35 000 €</p>
                            </div>
                        </div>
                        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                    {/* Fin de carte */}

                </div>
            </div>
        </>
    );
}

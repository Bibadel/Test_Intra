import Header from '@/Components/Header';
import { Inertia } from '@inertiajs/inertia';
import Pagination  from '@/Components/Page/Pagination';
export default function Index(props){
    // console.log(props)

    const checkFuel = (fuel) => {
        let fuelname = "";
        switch(fuel){
            case "D":
                fuelname = "Diesel|Biodiesel";
                break;
            case "SP":
                fuelname = "Sans Plomb 95/98";
                break;
            case "JET":
                fuelname = "Kerosène";
                break;
        }
        return fuelname;
    }


    return(
        <>
        <Header title="Informations" url={props.ziggy.url}  />
            <div class="container mx-auto px-4 py-12">
                <Pagination className="pb-10" totalPages={props.vehicules.last_page} />
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Carte */}
                    {props.vehicules.data.length > 0 ? props.vehicules.data.map((vehicle) => (
                    <div onClick={() => { Inertia.get(route('vehicule.show', vehicle)) }} class="relative bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                        <div class="flex items-center space-x-4">
                            <img src={vehicle.img_url === null ?"https://cdn3d.iconscout.com/3d/premium/thumb/car-3655127-3061893.png" : vehicle.img_url} alt="Exemple de véhicule" class="w-32 h-auto rounded-lg" />
                            <div>
                                <h3 class="text-lg font-semibold text-gray-800">{vehicle.marque}</h3>
                                <p class="text-gray-600">Modèle : {vehicle.modele}</p>
                                <p class="text-gray-600">Plaque : {vehicle.immatriculation}</p>
                                <p class="text-gray-600">Essence : {checkFuel(vehicle.essence)}</p>
                                <p class="text-gray-600">Assurance : <span className={vehicle.assurance ? "text-green-600" : "text-red-600"}>{vehicle.assurance? "Valide" : "Invalide"}</span></p>
                                <p class="text-gray-600">Contrôle technique : <span className={vehicle.ct ? "text-green-600" : "text-red-600"}>{vehicle.ct? "Valide" : "Invalide"}</span></p>
                            </div>
                        </div>
                        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                    )): ""}
                    {/* Fin de carte */}

                </div>
            </div>

            <span className="absolute pb-0 pl-0 text-gray-400 text-sm"><i>Made by Noco#2808</i></span>
        </>
    );
}
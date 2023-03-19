import Header from "../../Components/Header";
import Pagination from "@/Components/Page/Pagination";
import {Inertia} from '@inertiajs/inertia';
export default function Index(props) {
    console.log(props.interimaires)
    return (
        <>
            <Header title="Intérimaires" url={props.ziggy.url} />
            <section class=" py-12">
                <h1 class="text-center text-4xl pb-10 ">🧔‍♂️ Intérimaires </h1>

                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {   props.interimaires.data.length > 0 ? props.interimaires.data.map((interimaire) => (
                        <div class="relative bg-white p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg" onClick={ () => Inertia.get(route('interimaire.show', interimaire))}>
                            <div class="flex items-center space-x-4">
                                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/worker-wearing-5379423-4495968.png" alt="Exemple d'image" class="w-16 h-16 rounded-lg" />
                                <div>
                                    <h3 class="text-lg font-semibold text-gray-800">{interimaire.firstname} {interimaire.lastname}</h3>
                                    <p class="mt-2 text-gray-600">Contrat : ?</p>
                                </div>
                            </div>
                            <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 hover:opacity-40 transition-opacity duration-200">

                            </div>
                        </div>
                        )) : ""}

                    </div>
                </div>
                <Pagination   className="pt-10"totalPages={props.interimaires.last_page} />

            </section>
        </>
    );

}


// https://cdn3d.iconscout.com/3d/premium/thumb/worker-wearing-5379423-4495968.png

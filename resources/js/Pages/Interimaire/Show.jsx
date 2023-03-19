import {Link} from "@inertiajs/react";
import Header from "../../Components/Header";
import ApplicationButton from '@/Components/Navigation/ApplicationButton'

export default function Show(props) {
    return (
        <>
        <Header title={props.interimaire.firstname} url={props.ziggy.url} />
        <div class="container mx-auto px-4 py-12">
            <div class="bg-white p-6 rounded-lg shadow-md">
                <div className="absolute pt-0" >
                    <Link href={route('interimaire.index')}>⬅ Retour à la liste des intérimaires </Link>
                </div>
                <div class="flex items-center justify-center">
                    <div class="w-24 h-24 relative">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/worker-wearing-5379423-4495968.png" alt="Avatar" class="w-full h-full object-cover rounded-full border-4 border-blue-500" />
                        <div class="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div class="ml-4">
                        <h2 class="text-xl font-semibold text-gray-800">{props.interimaire.firstname + " " + props.interimaire.lastname}</h2>
                    
                    </div>
                </div>


                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="relative p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                        <h3 class="text-lg font-semibold text-gray-800"><b><u>État du contrat :</u></b></h3>
                        <p class="mt-2 text-green-600">Signé par les deux parties</p>
                        <p className="mt-2"> Fais le 02/03/5025</p>
                        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                    <div class="relative p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                        <h3 class="text-lg font-semibold text-gray-800"><b> <u>Nombres de trajets faits : </u></b></h3>
                        <p class="mt-2 text-gray-600"><i>75</i></p>
                        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                    <div class="relative p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                        <h3 class="text-lg font-semibold text-gray-800"><b> <u>Inscris depuis  : </u></b></h3>
                        <p class="mt-2 text-gray-600"><i>02/05/2022</i></p>
                        <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                </div>



            </div>
        </div>
        </>
    )
}
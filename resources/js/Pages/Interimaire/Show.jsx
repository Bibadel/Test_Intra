import {Link} from "@inertiajs/react";
import Header from "../../Components/Header";
import ApplicationButton from '@/Components/Navigation/ApplicationButton';
import {Inertia} from '@inertiajs/inertia';

export default function Show(props) {
    console.log(props)
    let creationDate = new Date(props.interimaire.created_at);
    creationDate = creationDate.toLocaleDateString('fr-FR', {year: 'numeric', month: 'long', day: 'numeric'});

    const contratData = {
        color: "red",
        text: "Aucun contrats n'a été signé",
        action: "Signer un contrat",
    }
    
    if(props.contrat !== null){
        contratData.action = null,
        contratData.color = "green",
        contratData.text = "Contrat signé"
    }

    const handleClickContrat = (e) => {
        e.preventDefault();
        if(contratData.action !== null){
            Inertia.get(route('contrat.create'))
        }else{
            Inertia.get(route('contrat.show', props.contrat))
        }
    }   
    return (
        <>
        <Header title={props.interimaire.firstname} url={props.ziggy.url} />
        <div className="container mx-auto px-4 py-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="absolute pt-0" >
                    <Link href={route('interimaire.index')}>⬅ Retour à la liste des intérimaires </Link>
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-24 h-24 relative">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/worker-wearing-5379423-4495968.png" alt="Avatar" className="w-full h-full object-cover rounded-full border-4 border-blue-500" />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div className="ml-4">
                        <h2 className="text-xl font-semibold text-gray-800">{props.interimaire.firstname + " " + props.interimaire.lastname}</h2>
                    
                    </div>
                </div>


                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6" >
                    <div className={`relative p-6 rounded-lg shadow-md bg-opacity-20 bg-${contratData.color}-600 transition-all duration-200 hover:shadow-lg`} onClick={handleClickContrat}>
                        <h3 className="text-lg font-semibold text-gray-800"><b><u>État du contrat :</u></b></h3>
                        <p className="mt-2 text-gray-600">{contratData.text}</p>
                        { contratData.action !== null ? "Appuyez pour créer un contrat" : ""}
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                    <div className="relative p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-800"><b> <u>Nombres de trajets faits : </u></b></h3>
                        <p className="mt-2 text-gray-600 "><i>{ props.trajets.length}</i></p>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                    <div className="relative p-6 rounded-lg shadow-md transition-all duration-200 hover:shadow-lg">
                        <h3 className="text-lg font-semibold text-gray-800"><b> <u>Inscris depuis  : </u></b></h3>
                        <p className="mt-2 text-gray-600"><i>{creationDate}</i></p>
                        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-500 to-teal-600 opacity-0 hover:opacity-40 transition-opacity duration-200"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
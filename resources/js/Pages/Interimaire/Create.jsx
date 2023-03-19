import Header from "@/Components/Header"
import { useForm } from '@inertiajs/react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Create(props) {
   
    const { data, setData, post, processing, errors, reset } = useForm({
        firstname: '',
        lastname: '',
        birthday:'',
        permisPL:false,
        blacklist:false,
    });
    console.log(errors)
    const handleChange = (e) => {
        setData(e.target.name, e.target.type === "checkbox" ? e.target.checked : e.target.value);
        console.log(e.target.name)
        console.log(data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('interimaire.store'));
    }
    return (
        <>
            <Header title="Création Intérimaire" url={props.ziggy.url} />
            <div class="container mx-auto px-4 py-12">
                <div class="bg-white p-6 rounded-lg shadow-md">
                    <h2 class="text-xl font-semibold text-gray-800 mb-6">Formulaire moderne</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="mb-4">
                            <label for="firstname" class="block text-gray-800 font-medium">Nom</label>
                            <input onChange={handleChange} type="text" id="firstname" name="firstname" class="mt-2 w-full p-2 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none shadow-md transition-shadow duration-200 focus:shadow-lg" />
                        </div>
                        <div class="mb-4">
                            <label for="lastname" class="block text-gray-800 font-medium">Prénom</label>
                            <input onChange={handleChange} type="text" id="lastname" name="lastname" class="mt-2 w-full p-2 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none shadow-md transition-shadow duration-200 focus:shadow-lg" />
                        </div>                
                        <div class="mb-4">
                            <span class="text-gray-800 font-medium">Date de naisssance :</span>
                            <div class="mt-2">
                                <label for="birthday" class="inline-flex items-center">
                                    <input onChange={handleChange} type="date" id="birthday" name="birthday" class="text-blue-500 rounded-2xl" />
                                </label>
                            </div>
                        </div>
                        <div class="mb-4">
                            <div>
                                <label for="permisPL" class="inline-flex items-center">
                                    <input onChange={handleChange} type="checkbox" id="permisPL" name="permisPL" class="text-blue-500" />
                                    <span class="ml-2">Permis PL</span>
                                </label>
                            </div>
                            <div>
                                <label for="blacklist" class="inline-flex items-center">
                                    <input onChange={handleChange} type="checkbox" id="blacklist" name="blacklist" class="text-blue-500" />
                                    <span class="ml-2">Black List</span>
                                </label>
                            </div>
                        </div>

                        <div class="text-center">
                            <button type="submit" class="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium px-4 py-2 rounded-md  hover:from-blue-600 hover:to-indigo-700 shadow-md transition-shadow duration-200 focus:shadow-lg">Envoyer</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
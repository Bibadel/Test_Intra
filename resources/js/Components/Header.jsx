import { Head } from "@inertiajs/react";
import ApplicationButton from "@/Components/Navigation/ApplicationButton";

export default function Header({ title, url}) {

    return (
        <>
            <Head title={title} />
            <ApplicationButton />
            <header>
                <div class="py-5 px-5 pl-5 flex items-left justify-center h-16">
                    <img src={`${url}/storage/assets/Logo.png`} alt="Logo Total Ouessant" class="pl-5 h-10 w-auto"/>
                </div>
            </header>
        </>
    );
}
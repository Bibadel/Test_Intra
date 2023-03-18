import React, { useState } from 'react';
import Application from '@/Components/Navigation/Menu/Applications';
import { Link } from '@inertiajs/react';
export default function ApplicationButton(props) {
    const [isOpen, setIsOpen] = useState(false);

    const openMenu = (e) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }
    return (
        <>
            <button onClick={openMenu}>
                <div class="rounded rounded-flex items-center space-x-4 bg-gray-100 py-2 px-2">
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M5 4.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5zm0-1h5A1.5 1.5 0 0 1 11.5 5v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 10V5A1.5 1.5 0 0 1 5 3.5zm0 10a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5H5zm0-1h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 19v-5A1.5 1.5 0 0 1 5 12.5zm9 1a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm0-1h5a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-5a1.5 1.5 0 0 1-1.5-1.5v-5a1.5 1.5 0 0 1 1.5-1.5zm6.034-5.098a.225.225 0 0 0 0-.318l-3.182-3.182a.225.225 0 0 0-.318 0l-3.182 3.182a.225.225 0 0 0 0 .318l3.182 3.182c.087.088.23.088.318 0l3.182-3.182zm.742.742l-3.182 3.182a1.275 1.275 0 0 1-1.803 0L12.61 8.144a1.275 1.275 0 0 1 0-1.803l3.182-3.182a1.275 1.275 0 0 1 1.803 0l3.182 3.182a1.275 1.275 0 0 1 0 1.803z"
                            fill="#979797" />
                    </svg>
                </div>
            </button>
            <div className={`relative min-h-full bg-gray-100 flex items-center justify-center backdrop-blur-lg z-50 ${!isOpen ? "hidden" : ""}`}>
                <div class={` bg-indigo-100 flex items-center justify-center backdrop-blur-lg  rounded-lg shadow-lg`}>
                    <div class="flex flex-col items-center py-4">
                        <img src="https://via.placeholder.com/40" alt="logo" class="ml-4 mb-4 rounded-full border border-black" />
                        
                    </div>
                    <hr class="border-gray-300" />
                    <div class="grid grid-cols-3 gap-4 p-4">
                        <Link href={route('home')} className="">
                            <Application name="Accueil" url="https://cdn3d.iconscout.com/3d/premium/thumb/house-5591108-4652885.png" />
                        </Link>

                        <Link href={route('interimaire.index')} className="">
                            <Application name="Intérimaires" url="https://cdn3d.iconscout.com/3d/premium/thumb/user-6332708-5209354.png" />
                        </Link>

                        <Link href={route('vehicules.index')} className="">
                            <Application name="Intérimaires" url="https://cdn.iconscout.com/icon/free/png-512/truck-264-449929.png" />
                        </Link>


                    </div>
                </div>
            </div>
        </>
    );
}
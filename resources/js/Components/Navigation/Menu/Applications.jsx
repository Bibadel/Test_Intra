import { Inertia } from '@inertiajs/inertia'

export default function Application({ name, url }) {
    const handleClick = () => {
        console.log('clicked')
        Inertia.get(route('profile.edit'))
    }
    return (
        <>
        <div class="flex flex-col items-center space-y-2 hover:shadow-md">
            <button onClick={handleClick}><img src={url} alt="icon" class="w-8 h-auto rounded-md" /></button>
            <span class="text-sm text-gray-600">{name}</span>
        </div>
        </>
    )
}
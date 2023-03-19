export default function Application({ name, url }) {
    return (
        <>
        <div class="flex flex-col items-center space-y-2 hover:shadow-md">
            <img src={url} alt="icon" class="w-8 h-auto rounded-md"/>
            <span class="text-sm text-gray-600">{name}</span>
        </div>
        </>
    )
}
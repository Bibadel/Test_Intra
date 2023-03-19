import { Link } from '@inertiajs/react'

export default function Pagination({ className, totalPages }) {
    let pages = []
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }

    return (
    <div class={`${className} mt-8`} >
        <ul class="flex justify-center space-x-2">

            { pages.length > 0 ? pages.map((page) => (
                <li>
                    <Link href={`?page=${page}`} className="bg-white text-blue-500 font-bold py-2 px-4 rounded">{ page }</Link>
                </li>
            )): ""}
        </ul>
    </div>
      
  );
}
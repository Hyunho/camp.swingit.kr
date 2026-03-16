src / components / DJs.tsximport Image from 'next/image'
const dj_people = [
    {
        name: 'DJ 해림',
        imageUrl: '/images/2025/DJ/해림.png',
    },
    {
        name: 'DJ 메이저',
        imageUrl: '/images/2025/DJ/메이저.jpeg',
    },
    {
        name: 'DJ 아드리안',
        imageUrl: '/images/2025/DJ/아드리안.jpeg',
    },
    {
        name: 'TO BE ADDED...',
        imageUrl: '',
    },
]

export function DJs() {
    return (
        <div className="bg-white py-8 sm:py-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    DJs
                </h2>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none"
                >
                    {dj_people.map((person) => (
                        <li key={person.name}>
                            <div className="relative mx-auto aspect-square rounded-xl overflow-hidden bg-zinc-100 flex items-center justify-center text-zinc-400">
                                {person.imageUrl ? (
                                    <Image
                                        src={person.imageUrl}
                                        alt={person.name}
                                        fill
                                        sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                                        className="object-cover"
                                    />
                                ) : 'Image To Be Added'}
                            </div>
                            <h3 className="leading-7 mt-6 text-xl font-semibold tracking-tight text-gray-900">
                                {person.name}
                            </h3>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

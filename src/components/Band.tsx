import Image from 'next/image'

const bands = [
    {
        name: 'Swing It Orchestra (Big Band)',
        imageUrl: '/images/2025/band_swingit.png',
    },
    {
        name: 'Adamas Kim And The Rhythm Shufflers',
        imageUrl: '/images/2025/band_adamas.png',
    },
]

const djs = [
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
        name: 'TO BE ADDED',
        imageUrl: '',
    },
]

export function Band() {
    return (
        <div className="bg-white py-8 md:py-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                BANDS &amp; DJs
            </h2>

            {/* Bands grid */}
            <ul
                role="list"
                className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none"
            >
                {bands.map((band) => (
                    <li key={band.name}>
                        <div className="p-8">
                            <div className="relative aspect-[1/1] rounded-2xl overflow-hidden bg-zinc-100 flex items-center justify-center text-zinc-400">
                                {band.imageUrl ? (
                                    <Image
                                        src={band.imageUrl}
                                        alt={band.name}
                                        fill
                                        sizes="(min-width: 1024px) 50vw, 50vw"
                                        className="object-cover"
                                    />
                                ) : 'Image To Be Added'}
                            </div>
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 border-b pb-2 mb-2">
                                {band.name}
                            </h3>
                        </div>
                    </li>
                ))}
            </ul>

            {/* DJs grid */}
            <ul
                role="list"
                className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-4 lg:mx-0 lg:max-w-none"
            >
                {djs.map((dj) =>
                    dj.name === 'TO BE ADDED' ? (
                        <li key={dj.name} className="flex flex-col items-center">
                            <div className="relative mx-auto aspect-square w-full rounded-xl border-2 border-dashed border-zinc-300 flex items-center justify-center text-xs font-medium tracking-wide text-zinc-400">
                                TO BE<br />ADDED
                            </div>
                        </li>
                    ) : (
                        <li key={dj.name}>
                            <div className="relative mx-auto aspect-square rounded-xl overflow-hidden bg-zinc-100 flex items-center justify-center text-zinc-400">
                                {dj.imageUrl ? (
                                    <Image
                                        src={dj.imageUrl}
                                        alt={dj.name}
                                        fill
                                        sizes="(min-width: 640px) 25vw, 50vw"
                                        className="object-cover"
                                    />
                                ) : 'Image To Be Added'}
                            </div>
                            <h3 className="leading-7 mt-6 text-xl font-semibold tracking-tight text-gray-900">
                                {dj.name}
                            </h3>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
}

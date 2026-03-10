import Image from 'next/image'

interface Guest {
    id: string
    enName: string
    krName: string
    imageUrl?: string
    imageClasses?: string
}

const guests: Guest[] = [
    { id: 'g1', enName: 'Thomas Latter', krName: '' },
    { id: 'g2', enName: 'Aurore Alauze', krName: '' },
    { id: 'g3', enName: 'Hwayeon Lee', krName: '이화', imageUrl: '/images/2025/instructors/이화.jpeg' },
    { id: 'g4', enName: 'Haechang Noh', krName: '견우', imageUrl: '/images/2025/instructors/견우.jpeg' },
    { id: 'g5', enName: 'Suyeon Oh', krName: '뽈', imageUrl: '/images/2025/instructors/뽈.jpeg' },
    { id: 'g6', enName: 'Rico Lim', krName: '리코', imageUrl: '/images/2025/instructors/리코.jpeg' },
    { id: 'g7', enName: 'Chloe Hong', krName: '클로이', imageUrl: '/images/2025/instructors/클로이.jpeg' },
    { id: 'g8', enName: 'Heechang Jang', krName: '안단테', imageUrl: '/images/2025/instructors/안단테.jpeg' },
    { id: 'g9', enName: 'Meti Cho', krName: '메티', imageUrl: '/images/2025/instructors/메티.jpeg' },
    { id: 'g10', enName: 'Tail Oh', krName: '테일', imageUrl: '/images/2025/instructors/테일.jpeg' },
    { id: 'g11', enName: 'Hago Choi', krName: '하고', imageUrl: '/images/2025/instructors/하고.jpeg' },
    { id: 'g12', enName: 'Daewoong Kim', krName: '잇츠', imageUrl: '/images/2025/instructors/잇츠.jpeg' },
    { id: 'g13', enName: 'Changho Cha', krName: '짜장', imageUrl: '/images/2025/instructors/짜장.jpeg', imageClasses: 'object-top' },
    { id: 'g14', enName: 'Sangmi Heo', krName: '오바쟁이', imageUrl: '/images/2025/instructors/오바쟁이.jpeg', imageClasses: 'object-top' },
    { id: 'g15', enName: 'Storm Jeon', krName: '스톰', imageUrl: '/images/2025/instructors/스톰.jpeg' },
    { id: 'g16', enName: 'Hyang Sook Noh', krName: '까미', imageUrl: '/images/2025/instructors/까미.jpeg' },
    { id: 'g17', enName: 'Joje Hyunmi Kim', krName: '조제', imageUrl: '/images/2025/instructors/조제.jpeg' },
    { id: 'g18', enName: 'To Be Added', krName: '' },
]

export function Guests() {
    return (
        <div className="bg-white py-8 dark:bg-zinc-900 sm:py-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-4xl text-center lg:text-left">
                    Guests
                </h2>
            </div>
            <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
                <div className="flex flex-col gap-10">
                    <section className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/40">
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-5">
                            {guests.map((guest, index) => (
                                <div
                                    key={guest.id}
                                    className={`flex flex-col items-center rounded-2xl bg-white p-2 text-center shadow dark:bg-zinc-800 ${index === 2 ? 'lg:col-start-1' : ''}`}
                                >
                                    <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-700">
                                        {guest.imageUrl ? (
                                            <Image
                                                src={guest.imageUrl}
                                                alt={`${guest.enName} photo`}
                                                fill
                                                sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 45vw"
                                                className={`object-cover ${guest.imageClasses || ''}`}
                                            />
                                        ) : (
                                            <div className="flex h-full w-full flex-col items-center justify-center p-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                                                <div className="text-indigo-600 dark:text-indigo-400">{guest.enName}</div>
                                                {guest.krName && <div className="mt-1 text-xs text-indigo-500 dark:text-indigo-300">{guest.krName}</div>}
                                            </div>
                                        )}
                                    </div>
                                    {guest.imageUrl && (
                                        <div className="mt-3 flex flex-col items-center text-base font-semibold text-zinc-900 dark:text-zinc-100">
                                            <div>{guest.enName}</div>
                                            {guest.krName && <div className="text-xs text-zinc-500 dark:text-zinc-400">{guest.krName}</div>}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

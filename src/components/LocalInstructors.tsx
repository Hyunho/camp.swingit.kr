import Image from 'next/image'
const local_instructors: any[] = []

export function LocalInstructors() {
    return (
        <div className="bg-white py-4 md:py-8">
            <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {local_instructors.map((instructor) => (
                        <div
                            key={instructor.name}
                            className="flex flex-col items-center rounded-2xl bg-white p-2 text-center shadow"
                        >
                            <div className="flex aspect-square w-full flex-col items-center">
                                <div className="relative h-48 w-48 bg-gray-100 sm:h-64 sm:w-64">
                                    <Image
                                        src={instructor.imageUrl}
                                        alt={instructor.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="mt-2 text-sm font-semibold">
                                    {instructor.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

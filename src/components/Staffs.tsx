const staffs = [
    { name: 'Adamas', group: 'CORE' },
    { name: '들라', group: 'CORE' },
    { name: '초코미르', group: 'CORE' },
    { name: '정양', group: 'CORE' },
    { name: '칠면조', group: 'CREW' },
    { name: '랭보', group: 'CREW' },
    { name: '대뜩', group: 'CREW' },
    { name: '엘리', group: 'CREW' },
    { name: '카렌', group: 'CREW' },
    { name: '시니', group: 'CREW' },
    { name: '현힁', group: 'CREW' },
    { name: '굼', group: 'CREW' },
    { name: '마리아', group: 'MEDIA TEAM' },
    { name: 'Sage Min', group: 'SPECIAL MATE' },
]

export function Staffs() {
    return (
        <div className="bg-white py-8 sm:py-12">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Staffs
                </h2>
            </div>
            <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    {staffs.map((staff) => (
                        <div
                            key={staff.name}
                            className="flex flex-col items-center rounded-2xl bg-white p-2 text-center shadow"
                        >
                            <div className="flex aspect-square w-full flex-col items-center justify-center">
                                <div className="text-xs font-medium text-indigo-600 mb-1">{staff.group}</div>
                                <div className="text-base font-semibold">{staff.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

import Image from 'next/image'
const people = [
    {
        name: 'Swing It Orchestra (Big Band)',
        role: 'Co-Founder / CEO',
        imageUrl: '/images/2025/band_swingit.png',
    },
    {
        name: 'Adamas Kim And The Rhythm Shufflers',
        role: 'Co-Founder / CEO',
        imageUrl: '/images/2025/band_adamas.png',
    },
    {
        name: 'TO BE ADDED...',
        role: 'Co-Founder / CEO',
        imageUrl: '',
    },
]

export function Band() {
    return (
        <div className="bg-white py-8 md:py-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Musicians
            </h2>
            <div>
                {/* <p className="mt-6 text-lg leading-8 text-gray-600">
          Have you ever dreamed of dancing to a big band? If so, meet CSI&apos;s house band, Swing It Orchestra! <br/>
          (빅 밴드 음악에 맞춰 스윙댄스를 추는 꿈을 꿔보신 적이 있으신가요? 그렇다면 CSI의 하우스밴드 스윙잇 오케스트라를 만나보세요!)
      </p> */}
            </div>
            {/* <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            src="/images/2024/total_band.jpeg"
            alt="App screenshot"
            className="rounded-xl shadow-2xl ring-1 ring-gray-900/10"
            width={2432}
            height={1442}
          />
          <div className="relative" aria-hidden="true">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div> */}
            {/* <div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Experience the ultimate jazz fusion with the Shirt Tail Stompers and Adamas kim and the Rhythm shufflers! A blend of Harlem Swing and early jazz for a night of exhilarating rhythms.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Shirt Tail Stompers와 Adamas kim and the Rhythm shufflers와 함께하는 최고의 재즈 퓨전을 경험하세요! 할렘 스윙과 초기 재즈의 조화로 밤새도록 짜릿한 리듬을 즐길 수 있습니다.
        </p>
      </div> */}
            {/*    
      <div>
        <p>
        </p>
      </div> */}

            {/* <Image className="aspect-[1/1] rounded-2xl object-cover mt-10"  src="/images/2024/total_band.jpeg" alt="CSI 2025 Silhouette" width={500} height={500} /> */}
            <ul
                role="list"
                className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            >
                {people.map((person) => (
                    <li key={person.name}>
                        <div className="p-8">
                            <div className="relative aspect-[1/1] rounded-2xl overflow-hidden bg-zinc-100 flex items-center justify-center text-zinc-400">
                                {person.imageUrl ? (
                                    <Image
                                        src={person.imageUrl}
                                        alt={person.name}
                                        fill
                                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                                        className="object-cover"
                                    />
                                ) : 'Image To Be Added'}
                            </div>
                            <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900 border-b pb-2 mb-2">
                                {person.name}
                            </h3>
                            {Boolean('bio' in person && (person as any).bio) && (
                                <div className="mt-4 text-sm leading-6 text-gray-600 whitespace-pre-wrap">
                                    {(person as any).bio}
                                </div>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

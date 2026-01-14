import Image from 'next/image'

const features = [
    {
      name: 'Hyojeong Cultural Hall (효정문화홀)',
      description: 'Today, Next, and Someday cards allow you to defer your dreams into the future.',
      imageSrc: '/images/venues/culture_hall.jpeg',
      imageAlt: 'Green cardstock box containing white, beige, and brown cards.',
    },
    {
      name: 'Auditorium (오디토리움)',
      description: 'Each refill pack contains plenty of cards to last you a month of procrastination.',
      imageSrc: '/images/venues/auditorium.jpeg',
      imageAlt: 'Green cardstock box open with 50 cards inside.',
    },
    {
      name: 'Hyosjeong International Conference Hall (효정국제컨퍼런스홀)',
      description: 'Flip a card over to doodle during meetings when you should be listening.',
      imageSrc: '/images/venues/conference_hall1.jpeg',
      imageAlt: 'Detail of white today card, beige next card, and brown someday card with dot grid.',
    },
    // {
    //   name: '효정국제컨퍼런스홀',
    //   description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
    //   imageSrc: '/images/venues/conference_hall2.jpeg',
    //   imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    // },
    {
      name: 'Information Desk (인포메이션 데스크)',
      description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc: '/images/venues/information.jpeg',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
    {
      name: 'Cafeteria (식당)',
      description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc: '/images/venues/restaurants.jpeg',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
    {
      name: 'Accommodation Building (숙소동)',
      description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc: '/images/venues/lodging1.jpeg',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
    // {
    //   name: '숙소동',
    //   description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
    //   imageSrc: '/images/venues/lodging2.jpeg',
    //   imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    // },
    {
      name: 'Accommodation (숙소)',
      description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc: '/images/venues/lodging3.jpeg',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
    {
      name: 'Hyojeong Cultural Cafe (효정문화카페)',
      description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
      imageSrc: '/images/venues/cafe1.jpeg',
      imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    },
    // {
    //   name: '효정문화카페',
    //   description: 'Subscribe and save on routine refill packs to keep you productive all year long.',
    //   imageSrc: '/images/venues/cafe2.jpeg',
    //   imageAlt: 'Stack of three green cardstock boxes with 3 hole cutouts showing cards inside.',
    // },
  ]

export function Pictures() {
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mt-11 grid grid-cols-1 items-start gap-x-6 gap-y-16 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col-reverse">
                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-gray-900">{feature.name}</h4>
                  </div>
                  <div className="relative aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
}
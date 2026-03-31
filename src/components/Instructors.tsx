'use client'

import Image from 'next/image'
import { ReactNode, useState } from 'react'
import clsx from 'clsx'

interface InstructorPerson {
  name: ReactNode
  role: string
  alt: string
  description?: string
  imageUrl?: string
  imageUrls?: string[]
  imageClasses?: string
}

const instructorPeople: InstructorPerson[] = [
  {
    name: (
      <>
        <span className="text-red-500 font-bold">CANCELED</span> : Peter Loggins & Katja Završnik
      </>
    ),
    role: 'Instructor',
    imageUrls: [
      '/images/2026/DANCERS/Peter_Loggins.jpg',
      '/images/2026/DANCERS/Katja_Završnik.jpg',
    ],
    description: `Peter Loggins is the foremost researcher on American Jazz Dances. Credited during the 1990's for bringing back several dances that he learned from the original dancers of the 1920's, 30's and 40's.\nHe brings a first hand historical approach to his classes sharing what was handed down by legends of the past including National Charleston champions, Harvest Moon Ball Lindy Hop winners and 1930's Swing Champions.\nPeter not only travels worldwide as an instructor, lecturer, performer and competition judge but he has also been featured in television and film such as Beverly Hills 90210, Marilyn Mansion Mobscene video, Royal Crown Revue's Zip Gun Pop video and Films such as Mulholland Drive, and the 13th Floor.\nAside from having a down to earth street approach to teaching, his expansive knowledge of the cultures along with the music that drove social dancing allows students to learn the history of these dances and how they've evolved through the years.\n\n피터 로긴스(Peter Loggins)는 아메리칸 재즈 댄스 분야의 독보적인 연구가입니다. 그는 1990년대에 1920~40년대 오리지널 댄서들로부터 직접 전수받은 여러 춤들을 다시 현대에 보급한 공로를 인정받고 있습니다.\n피터는 내셔널 찰스턴 챔피언, 하베스트 문 볼 린디합 우승자, 1930년대 스윙 챔피언 등 과거의 전설들이 물려준 유산들을 자신의 수업에 녹여내며, 역사적 사실에 기반한 생생한 접근 방식을 선보입니다.\n그는 강사, 강연가, 퍼포머, 그리고 대회 심사위원으로서 전 세계를 무대로 활동할 뿐만 아니라, '베벌리힐즈 아이들(90210)', 마릴린 맨슨의 'mOBSCENE' 뮤직비디오, 로열 크라운 리뷰의 'Zip Gun Pop' 뮤직비디오를 비롯해 영화 '멀홀랜드 드라이브', '13층' 등 다수의 TV 프로그램과 영화에도 출연한 바 있습니다.\n피터는 소탈하고 현장 중심적인 지도 방식 외에도, 소셜 댄스의 원동력이 된 음악과 문화에 대한 해박한 지식을 갖추고 있습니다. 덕분에 학생들은 이 춤들의 역사와 수년에 걸쳐 어떻게 진화해 왔는지를 깊이 있게 배울 수 있습니다.\n\nKatja Završnik started dancing at the age of 5 and through the years studied various forms of dance such as Ballet, Jazz, Modern, Ballroom, Gymnastics and Acrobatic Rock and Roll for 9 years.\nSince 2005 she has focused on early American dances from the Jazz Age and Swing era, such as the Lindy Hop, Swing, Balboa, Charleston, St.Louis Shag and Authentic jazz.Her knowledge of(almost) all swing dances allows Katja to adapt her dance to any type of dancer.Which places her on the market among one of the best followers understanding connection and reactivity.\nShe is an elegant dancer.At first, you’ll be seduced by her style based on subtlety and finesse.But if you look a little closer you’ll be surprised by her musicality and footwork.Her focus on musicality and connection makes her one of the scene’s most sought - after followers.\nHer shyness – probably her Slovenian origin as well – gives at first a “cold” feeling.But don’t make any mistake: she loves to laugh, party, and have fun.During a dance, she is among the few followers to never refuse a dance and is often the last to leave the dance floor.\nCurrently living in Ljubljana, Slovenia, Katja travels doing special weekend workshops and festivals.In the past 13 years, she has taught and performed all over Europe, Asia and the USA.\nAt the end of the year 2020, she qualified as a pregnancy and postpartum exercise specialist and gained an “IFPA(Pre and Post Natal Instructor)” and “FemFit Instructor - exercises in pregnancy and postpartum“ certificates.\n\n까쨔 자브르슈닉(Katja Završnik)은 5살 때 무용을 시작해 발레, 재즈, 모던 댄스, 볼룸 댄스, 체조, 그리고 아크로바틱 로큰롤에 이르기까지 9년 동안 다양한 춤을 섭렵했습니다.\n2005년부터 그녀는 린디합, 스윙, 발보아, 찰스턴, 세인트루이스 쉐그, 어센틱 재즈 등 재즈 시대와 스윙 시대의 초기 미국 댄스에 집중해 왔습니다.거의 모든 종류의 스윙 댄스를 이해하고 있는 까쨔는 어떤 파트너에게도 자신의 춤을 맞출 수 있는 능력을 갖추고 있습니다.덕분에 그녀는 커넥션과 반응성이 뛰어난 업계 최고의 팔로워(Follower) 중 한 명으로 손꼽힙니다.\n까쨔는 매우 우아한 댄서입니다.처음에는 섬세하고 정교한 그녀의 스타일에 매료되지만, 조금 더 자세히 들여다보면 그녀의 놀라운 음악성과 화려한 풋워크에 놀라게 될 것입니다.음악성과 커넥션에 집중하는 그녀의 태도는 그녀를 댄스 씬에서 가장 사랑받는 팔로워로 만들었습니다.\n수줍음이 많은 성격과 슬로베니아 출신이라는 배경 때문에 첫인상은 다소 차갑게 느껴질 수 있습니다.하지만 오해하지 마세요.그녀는 웃고 파티하며 즐기는 것을 무척 좋아합니다.춤에 있어서는 그 어떤 댄스도 거절하지 않는 소수의 팔로워 중 한 명이며, 종종 플로어에 마지막까지 남아있는 주인공이기도 합니다.\n현재 슬로베니아 류블랴나에 거주하며 전 세계를 순회하며 워크숍과 페스티벌을 진행하고 있습니다.지난 13년 동안 유럽, 아시아, 미국 전역에서 공연과 강의를 펼쳐왔습니다.\n2020년 말, 그녀는 임산부 및 산후 운동 전문가 자격을 취득하여 IFPA(임신 및 산후 지도자) 및 FemFit 강사(임신 및 산후 운동) 자격증을 보유하게 되었습니다.`,
    alt: 'Peter & Katja',
  },
  {
    name: 'Sing Lim & Zeng Weiming',
    role: 'Instructor',
    imageUrls: [
      '/images/2026/DANCERS/Sing_Lim.jpg',
      '/images/2026/DANCERS/Zeng_Weiming.jpg',
    ],
    alt: 'Sing Lim & Zeng Weiming',
  },
  {
    name: 'Ilkyu Kang(뀨) & Jihee Baek(지희)',
    role: 'Instructor',
    imageUrls: [
      '/images/2026/DANCERS/Kkyu.png',
      '/images/2026/DANCERS/Jihee.jpeg',
    ],
    description: `뀨와 지히는 서울을 기반으로 활동하는 스윙댄서로, 린디합과 발보아를 중심으로 다양한 스윙 스타일을 선보이고 있다.\n두 사람은 역동적인 에너지와 에어리얼이 돋보이는 다이나믹한 퍼포먼스로 잘 알려져 있다.\n린디합의 자유롭고 파워풀한 움직임과 발보아의 빠르고 섬세한 리듬을 모두 즐기며, 두 스타일을 자연스럽게 넘나드는 것이 이들의 강점이다.\n또한 지히와 뀨는 KLHC 올스타 스트릭틀리 부문 2년 연속 우승자로, 국내외 다양한 스윙댄스 행사에서 공연과 강습, 심사 등으로 활발히 활동하고 있다.\n\nJihee and Ilkyu are Seoul-based swing dancers specializing in Lindy Hop and Balboa.\nKnown for their energetic style and dynamic aerials, they bring powerful movement and exciting performances to the floor.\nThey love both the freedom and power of Lindy Hop and the fast, intricate rhythms of Balboa, seamlessly moving between the two styles.\nThey are also two-time KLHC All-Star Strictly champions and are actively involved in the international swing dance scene through teaching, performances, and judging.`,
    alt: 'Ilkyu Kang & Jihee Baek',
  },
  {
    name: 'Youngbo Shim(랭보) & Laura Hong(홍지)',
    role: 'Instructor',
    imageUrls: [
      '/images/2026/DANCERS/Rangbo.jpeg',
      '/images/2026/DANCERS/Hongji.jpeg',
    ],
    alt: 'Youngbo Shim & Laura Hong',
  },
  { name: 'Thomas Latter', role: 'Judge', alt: 'Thomas Latter_g1', imageUrl: '/images/2026/DANCERS/thomas.jpg' },
  { name: 'Aurore Alauze', role: 'Judge', alt: 'Aurore Alauze_g2', imageUrl: '/images/2026/DANCERS/Aurore.jpg' },
  { name: 'Mariko', role: 'Judge', alt: 'Mariko', imageUrl: '/images/2026/DANCERS/mariko.png' },
  { name: 'DD', role: 'Judge', alt: 'DD', imageUrl: '/images/2026/DANCERS/DD.png' },
  { name: 'Dela Donghyun Yoo(들라)', role: 'Judge', alt: 'Dela Donghyun Yoo_g3', imageUrl: '/images/2025/instructors/들라.jpeg' },
  { name: 'Hwayeon Lee(이화)', role: 'Judge', alt: 'Hwayeon Lee_g4', imageUrl: '/images/2025/instructors/이화.jpeg' },
  { name: 'Haechang Noh(견우)', role: 'Judge', alt: 'Haechang Noh_g5', imageUrl: '/images/2025/instructors/견우.jpeg' },
  { name: 'Suyeon Oh(뽈)', role: 'Judge', alt: 'Suyeon Oh_g6', imageUrl: '/images/2025/instructors/뽈.jpeg' },
  { name: 'Rico Lim(리코)', role: 'Judge', alt: 'Rico Lim_g7', imageUrl: '/images/2025/instructors/리코.jpeg' },
  { name: 'Chloe Hong(클로이)', role: 'Judge', alt: 'Chloe Hong_g8', imageUrl: '/images/2025/instructors/클로이.jpeg' },
  { name: 'Heechang Jang(안단테)', role: 'Judge', alt: 'Heechang Jang_g9', imageUrl: '/images/2025/instructors/안단테.jpeg' },
  { name: 'Meti Cho(메티)', role: 'Judge', alt: 'Meti Cho_g10', imageUrl: '/images/2025/instructors/메티.jpeg' },
  { name: 'Storm Jeon(스톰)', role: 'Judge', alt: 'Storm Jeon_g16', imageUrl: '/images/2025/instructors/스톰.jpeg' },
  { name: 'Hyang Sook Noh(까미)', role: 'Judge', alt: 'Hyang Sook Noh_g17', imageUrl: '/images/2025/instructors/까미.jpeg' },
  { name: 'Tail Oh(테일)', role: 'Judge', alt: 'Tail Oh_g11', imageUrl: '/images/2025/instructors/테일.jpeg' },
  { name: 'Hago Choi(하고)', role: 'Judge', alt: 'Hago Choi_g12', imageUrl: '/images/2025/instructors/하고.jpeg' },
  { name: 'Changho Cha(짜장)', role: 'Judge', alt: 'Changho Cha_g14', imageUrl: '/images/2025/instructors/짜장.jpeg', imageClasses: 'object-top' },
  { name: 'Sangmi Heo(오바쟁이)', role: 'Judge', alt: 'Sangmi Heo_g15', imageUrl: '/images/2025/instructors/오바쟁이.jpeg', imageClasses: 'object-top' },
  { name: 'Daewoong Kim(잇츠)', role: 'Judge', alt: 'Daewoong Kim_g13', imageUrl: '/images/2025/instructors/잇츠.jpeg' },
  { name: 'Joje Hyunmi Kim(조제)', role: 'Judge', alt: 'Joje Hyunmi Kim_g18', imageUrl: '/images/2025/instructors/조제.jpeg' },
]


function DancerCard({
  person,
}: {
  person: InstructorPerson
}) {
  const [isExpanded, setIsExpanded] = useState(false)
  const isCouple = !!(person.imageUrls && person.imageUrls.length > 0)

  return (
    <li className={clsx("flex flex-col items-center text-center h-full w-full", isCouple ? "col-span-2" : "col-span-1")}>
      {isCouple ? (
        <div className="grid w-full grid-cols-2 gap-3 sm:gap-4">
          {person.imageUrls!.map((imageUrl, imageIndex) => (
            <div key={imageUrl} className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-700">
              <Image src={imageUrl} alt={`${person.alt} ${imageIndex + 1}`} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 25vw, 50vw" className="object-cover" />
            </div>
          ))}
        </div>
      ) : person.imageUrl ? (
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-700">
          <Image src={person.imageUrl} alt={person.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 25vw, 50vw" className={clsx("object-cover", person.imageClasses)} />
        </div>
      ) : (
        <div className="relative flex w-full flex-col aspect-square items-center justify-center rounded-2xl bg-zinc-100 text-zinc-500 text-sm font-semibold p-2">
          <span className="text-zinc-600">{person.name}</span>
          <span className="mt-2 text-xs font-normal opacity-60">Image To Be Added</span>
        </div>
      )}
      <h3 className="mb-2 mt-4 w-full border-b pb-2 text-base sm:text-lg font-semibold tracking-tight text-gray-900 mx-auto">
        {person.name}
      </h3>
      {person.description && (
        <div className="mt-3 w-full text-sm leading-6 text-gray-600 flex-grow flex flex-col text-left">
          <div className={`whitespace-pre-wrap ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {person.description}
          </div>
          <button onClick={() => setIsExpanded(!isExpanded)} className="mt-2 text-indigo-600 font-medium hover:text-indigo-500 self-center">
            {isExpanded ? 'Show Less' : 'Read More'}
          </button>
        </div>
      )}
    </li>
  )
}

export function Instructors() {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center lg:text-left">
          Dancers & Judges
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-8 text-center"
        >
          {instructorPeople.map((person) => (
            <DancerCard key={person.alt} person={person} />
          ))}
        </ul>
      </div>
    </div>
  )
}

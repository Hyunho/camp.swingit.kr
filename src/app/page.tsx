import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import { YoutubeVideo } from '@/components/YoutubeVideo'
import { AboutPreview } from '@/components/AboutPreview'
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'

import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { CheckCircleIcon } from '@heroicons/react/20/solid'





function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Article({
  article,
  badgeLabel,
  highlight = false,
  className,
}: {
  article: ArticleWithSlug
  badgeLabel?: string
  highlight?: boolean
  className?: string
}) {
  return (
    <Card
      as="article"
      className={clsx(
        className,
        highlight &&
        'rounded-2xl border border-amber-200 bg-amber-50/60 p-4 shadow-lg shadow-amber-100/60 dark:border-amber-400/30 dark:bg-amber-500/10 dark:shadow-amber-500/10',
      )}
    >
      <Card.Title href={`/articles/${article.slug}`}>
        <span className="inline-flex items-center gap-2">
          <span>{article.title}</span>
          {badgeLabel ? (
            <span className="rounded-full bg-red-500 px-2 py-0.5 text-xs font-semibold text-white">
              {badgeLabel}
            </span>
          ) : null}
        </span>
      </Card.Title>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="!mb-1 hidden md:flex"
        decorate
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description className="line-clamp-2 !mt-1 hidden md:block">
        {article.description}
      </Card.Description>
      <Card.Cta className="!mt-2 hidden md:flex">Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group flex items-center justify-center -m-1 p-1" {...props}>
      <Icon className="h-7 w-7 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const instructor_people = [
  {
    name: 'Nick & Kate',
    // name: 'Peter Loggins & Katja Završnik',
    role: 'Senior Designer',
    // imageUrl:
    //   '/images/2024/Peter&Katja.png',
    videoUrl: '/videos/2025/Nick&Kate.mp4',
    alt: 'Nick & Kate',
  },
  {
    name: 'Peter & Naomi',
    role: 'Senior Designer',
    // imageUrl:
    //   '/images/2024/Hanna&Mattias.png',
    videoUrl: '/videos/2025/Peter&Naomi.mp4',
    alt: 'Peter & Naomi',
  },
  {
    name: 'Mattias & Hanna',
    role: 'Senior Designer',
    // imageUrl:
    //   '/images/2024/Sharon&Juan.png',
    videoUrl: '/videos/2025/Mattias&Hanna.mp4',
    alt: 'Mattias & Hanna',
  },
  {
    name: 'Juan & Sharon',
    role: 'Senior Designer',
    // imageUrl:
    //   '/images/2024/Gustav&Laia.png',
    videoUrl: '/videos/2025/Juan&Sharon.mp4',
    alt: 'Juan & Sharon',
  },
  // {
  //   name: 'Sing Lim',
  //   role: 'Senior Designer',
  //   imageUrl:
  //     '/images/2024/SingLim.png'
  // },
  // {
  //   name: '덱스(확정) & 애니(미정)',
  //   role: 'Senior Designer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',

  // },
  // {
  //   name: '덱스(확정) & 애니(미정)',
  //   role: 'Senior Designer',
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',

  // },
  // {
  //   name: '덱스(확정) & 애니(미정)',
  //   description: "덱스(확정) & 애니(미정)sdfasdfasdfasddfasdfasdfasdfad dummy",
  //   imageUrl:
  //     'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',

  // },
  // More people...
]
const local_instructors = [
  {
    name: '견우',
    imageUrl: '/images/2025/instructors/견우.jpeg',
  },
  {
    name: '뽈',
    imageUrl: '/images/2025/instructors/뽈.jpeg',
  },
  {
    name: '이화',
    imageUrl: '/images/2025/instructors/이화.jpeg',
  },
  {
    name: '들라',
    imageUrl: '/images/2025/instructors/들라.jpeg',
  },
  {
    name: '랭보',
    imageUrl: '/images/2025/instructors/랭보.jpeg',
  },
  {
    name: '홍지',
    imageUrl: '/images/2025/instructors/홍지.jpeg',
  },
  {
    name: '뀨',
    imageUrl: '/images/2025/instructors/뀨.png',
  },
  {
    name: '지희',
    imageUrl: '/images/2025/instructors/지희.png',
  },
  {
    name: '안단테',
    imageUrl: '/images/2025/instructors/안단테.jpeg',
  },
  {
    name: '메티',
    imageUrl: '/images/2025/instructors/메티.jpeg',
  },
  {
    name: '리코',
    imageUrl: '/images/2025/instructors/리코.jpeg',
  },
  {
    name: '클로이',
    imageUrl: '/images/2025/instructors/클로이.jpeg',
  },
  {
    name: '짜장',
    imageUrl: '/images/2025/instructors/짜장.jpeg',
  },
  {
    name: '오바쟁이',
    imageUrl: '/images/2025/instructors/오바쟁이.jpeg',
  },
  {
    name: '테일',
    imageUrl: '/images/2025/instructors/테일.jpeg',
  },
  {
    name: '하고',
    imageUrl: '/images/2025/instructors/하고.jpeg',
  },
  {
    name: '스톰',
    imageUrl: '/images/2025/instructors/스톰.jpeg',
  },
  {
    name: '까미',
    imageUrl: '/images/2025/instructors/까미.jpeg',
  },
  {
    name: '잇츠',
    imageUrl: '/images/2025/instructors/잇츠.jpeg',
  },
  {
    name: '조제',
    imageUrl: '/images/2025/instructors/조제.jpeg',
  },
]

function LocalInstructors() {
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

const staffs = [
  {
    name: '아다마스',
    imageurl: '/images/2025/staff/아다마스.png',
  },
  {
    name: '들라',
    imageurl: '/images/2025/staff/들라.jpeg',
  },
  {
    name: '초코미르',
    imageurl: '/images/2025/staff/초코미르.jpeg',
  },
  {
    name: '정양',
    imageurl: '/images/2025/staff/정양.jpeg',
  },
  {
    name: '프리',
    imageurl: '/images/2025/staff/프리.jpeg',
  },
  {
    name: '대뜩',
    imageurl: '/images/2025/staff/대뜩.jpeg',
  },
  {
    name: '초코',
    imageurl: '/images/2025/staff/초코.jpeg',
  },
  {
    name: '왕태',
    imageurl: '/images/2025/staff/왕태.jpeg',
  },
  {
    name: 'Roger',
    imageurl: '/images/2025/staff/Roger.jpeg',
  },
  {
    name: '고즈',
    imageurl: '/images/2025/staff/고즈.jpeg',
  },
  {
    name: '나오미',
    imageurl: '/images/2025/staff/나오미.jpeg',
  },
  {
    name: '다찌',
    imageurl: '/images/2025/staff/다찌.jpeg',
  },
  {
    name: '베아',
    imageurl: '/images/2025/staff/베아.jpeg',
  },
  {
    name: '보리야',
    imageurl: '/images/2025/staff/보리야.jpeg',
  },
  {
    name: '시니',
    imageurl: '/images/2025/staff/시니.jpeg',
  },
  {
    name: '쓰리',
    imageurl: '/images/2025/staff/쓰리.jpeg',
  },
  {
    name: '압뽀',
    imageurl: '/images/2025/staff/압뽀.jpeg',
  },
  {
    name: '엘리',
    imageurl: '/images/2025/staff/엘리.jpeg',
  },
  {
    name: '용보',
    imageurl: '/images/2025/staff/용보.jpeg',
  },
  {
    name: '카렌',
    imageurl: '/images/2025/staff/카렌.jpeg',
  },
  {
    name: '현힁',
    imageurl: '/images/2025/staff/현힁.jpeg',
  },
  {
    name: '후덕삼',
    imageurl: '/images/2025/staff/후덕삼.jpeg',
  },
  { name: '채르' },
  { name: '번쩍번쩍호랑이' },
  { name: '맥주피쳐' },
  { name: '주르' },
  { name: '꼬냥이' },
  { name: '혀기' },
  { name: '북실북실' },
  { name: '만듀' },
  { name: '칠면조' },
  { name: '죠죠' },
  { name: 'B.B.' },
  { name: '모찌' },
  { name: 'Orlando' },
  { name: '미노' },
]

function Staffs() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Staffs
      </h2>
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {staffs.map((staff) => (
            <div
              key={staff.name}
              className="flex flex-col items-center rounded-2xl bg-white p-2 text-center shadow"
            >
              {staff.imageurl ? (
                <div className="flex aspect-square w-full flex-col items-center">
                  <div className="relative h-24 w-24 sm:h-32 sm:w-32">
                    <Image
                      src={staff.imageurl}
                      alt={staff.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="mt-2 text-sm font-semibold">{staff.name}</div>
                </div>
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full sm:h-32 sm:w-32">
                  <span className="text-lg font-medium">{staff.name}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <div className="bg-white py-8 md:py-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        ABOUT
      </h2>
      <div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          C.S.I. is an abbreviation for “Camp Swing It”, a Swing Camp started in
          2009, and is a Swing Dance Camp that truly represents not only the
          Korean Swing Dance Scene, but also the whole Asia. It is an all-round
          Dance Event that covers a wide range of swing dances; including
          Balboa, Boogie-Woogie, Blues, and Tap, with a focus on Lindy Hop.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          This event is created by everyone from dancers who have just started
          dancing to professional dancers who have distinguished themselves at
          various events.3 nights and 4 days of workshops by famous dancers,
          parties with live bands, and K.L.H.C. (Korean Lindy Hop
          Championships), the best Lindy Hop competition in the country. It can
          be said to be a “Festival Of Dancers.”
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          (C.S.I. 는 “Camp Swing It”의 약자로서 2009년부터 시작된 스윙캠프로서
          대한민국 스윙댄스씬 뿐만이 아니라 아시아를 대표하는
          스윙댄스캠프입니다. 그리고 린디합을 중심으로 발보아, 부기우기, 블루스,
          탭 등 스윙댄스를 폭넓게 다루는 올라운드 댄스 행사를 추구합니다.
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          이제 막 춤을 시작한 댄서에서 부터 여러 행사에서 두각을 나타내고 있는
          프로댄서들까지 하나가 되어 만들어가는 이 행사는, 3박4일간 국내외
          챔피언들의 워크샵과 라이브 밴드와 함께하는 파티, 그리고 국내 최고의
          린디합 대회인 K.L.H.C.(Korean Lindy Hop Championships)가 함께하는
          진정한 “댄서들의 축제” 입니다.)
        </p>
      </div>
    </div>
  )
}

function Instructors() {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Dancers
        </h2>
        {/* <p className="mt-6 text-lg leading-8 text-gray-600">
          More Local Dancers will be announced. <br/>
          (로컬 댄서 라인업이 추가로 업데이트 될 예정입니다.) 
         </p> */}
        {/* The 2024 artists line up of Camp Swing It is as follows. */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-3 lg:mx-0 lg:max-w-none"
        >
          {instructor_people.map((person) => (
            <li key={person.name}>
              {/* <img className="mx-auto h-42 w-42 rounded-full" src={person.imageUrl} alt="" /> */}
              {/* <video className="mx-auto h-42 w-42 rounded-full" src={person.videoUrl} alt={person.alt} /> */}
              <video width="600" autoPlay loop muted playsInline>
                <source src={person.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="Gleading-7 mt-6 text-xl font-semibold tracking-tight text-gray-900">
                {person.name}
              </h3>
              {/* <p className="text-sm leading-6 text-gray-600">{person.description}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

const people = [
  {
    name: 'Swing It Orchestra (Big Band)',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/2025/band_swingit.png',
    bio: "London's top vintage band, the Shirt Tail Stompers are firmly established at home and internationally playing Harlem Swing and the Hot Jazz of the 1920s, 30s and 40s. Featuring music from composers such as Duke Ellington, Benny Goodman and Count Basie.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Naomi And Her Handsome Devils',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/2025/band_naomi.png',
    bio: 'Brother Yusef is a self-taught musician and has been described as a master solo guitarist and a uniquely passionate vocalist. His performances are raw, honest, and as real as the genre has ever aspired to be.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Adamas Kim And The Rhythm Shufflers',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/2025/band_adamas.png',
    bio: 'This is a band specializing in vintage dance music like early jazz, swing, and boogie-woogie, known for their 9-10 member lineup. They focus on enjoying dance and music together, gaining fame in the swing dance scene since their 2019 debut, and work to popularize vintage jazz culture.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Brother Yusef',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/2025/band_yusef.png',
    bio: 'This is a band specializing in vintage dance music like early jazz, swing, and boogie-woogie, known for their 9-10 member lineup. They focus on enjoying dance and music together, gaining fame in the swing dance scene since their 2019 debut, and work to popularize vintage jazz culture.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Project Band feat. Steven Coombe.',
    role: 'Co-Founder / CEO',
    imageUrl: '/images/2025/band_steven.png',
    bio: "London's top vintage band, the Shirt Tail Stompers are firmly established at home and internationally playing Harlem Swing and the Hot Jazz of the 1920s, 30s and 40s. Featuring music from composers such as Duke Ellington, Benny Goodman and Count Basie.",
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  // More people...
]

function Band() {
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
              <div className="relative aspect-[1/1] rounded-2xl overflow-hidden">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">
                {person.name}
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

const dj_people = [
  {
    name: 'DJ Philippe',
    imageUrl: '/images/2024/dj2.png',
  },
  {
    name: 'DJ Juan',
    imageUrl: '/images/2024/dj1.png',
  },
  {
    name: 'DJ 메이저',
    imageUrl: '/images/2025/DJ/메이저.jpeg',
  },
  {
    name: 'DJ 쓴귤',
    imageUrl: '/images/2025/DJ/쓴귤.jpeg',
  },
  {
    name: 'DJ 아드리안',
    imageUrl: '/images/2025/DJ/아드리안.jpeg',
  },
  {
    name: 'DJ 해림',
    imageUrl: '/images/2025/DJ/해림.png',
  },
]

function DJs() {
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
              <div className="relative mx-auto aspect-square rounded-xl overflow-hidden">
                <Image
                  src={person.imageUrl}
                  alt={person.name}
                  fill
                  sizes="(min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover"
                />
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

const tiers = [
  {
    name: 'Party',
    id: 'tier-party',
    href: '#',
    // price: { monthly: '$15', annually: '$12' },
    price: { dollor: '$15', won: '₩12' },
    description: 'Everything necessary to get started.',
    features: ['Accommodation included', 'Basic 2 nights. 1 night optional'],
  },
  {
    name: 'Accommodation',
    id: 'tier-accommodation',
    href: '#',
    price: { dollor: '$15', won: '₩12' },
    description:
      'Everything in Basic, plus essential tools for growing your business.',
    features: ['Accommodation included', 'Basic 2 nights. 1 night optional'],
  },
  {
    name: 'Meals',
    id: 'tier-meals',
    href: '#',
    price: { dollor: '$15', won: '₩12' },
    description:
      'Everything in Basic, plus essential tools for growing your business.',
    features: ['Accommodation included', 'Basic 2 nights. 1 night optional'],
  },
  // {
  //   name: 'Day Pass Package',
  //   id: 'tier-essential',
  //   href: '#',
  //   price: { dollor: '$15', won: '₩12' },
  //   description: 'Everything in Basic, plus essential tools for growing your business.',
  //   features: [
  //     'Accommodation not included',
  //     'Friday, Saturday, Sunday each',
  //   ],
  // },
  {
    name: 'Workshop',
    id: 'tier-workshop',
    href: '#',
    price: { dollor: '$15', won: '₩12' },
    description:
      'Everything in Basic, plus essential tools for growing your business.',
    features: [
      'Saturday accommodation included, Sunday optional',
      "Saturday kids' lessons",
      '2 adults + 1 kid',
    ],
  },
  // {
  //   name: 'Day party package',
  //   id: 'tier-growth',
  //   href: '#',
  //   price: { monthly: '$60', annually: '$48' },
  //   description: 'Everything in Essential, plus collaboration tools and deeper insights.',
  //   features: [
  //     'Unlimited products',
  //     'Unlimited subscribers',
  //     'Advanced analytics',
  //     '1-hour, dedicated support response time',
  //     'Marketing automations',
  //     'Custom reporting tools',
  //   ],
  // },
  // {
  //   name: 'Kids package',
  //   id: 'tier-growth',
  //   href: '#',
  //   price: { monthly: '$60', annually: '$48' },
  //   description: 'Everything in Essential, plus collaboration tools and deeper insights.',
  //   features: [
  //     'Unlimited products',
  //     'Unlimited subscribers',
  //     'Advanced analytics',
  //     '1-hour, dedicated support response time',
  //     'Marketing automations',
  //     'Custom reporting tools',
  //   ],
  // },
]

function Ticket() {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-2xl font-semibold leading-7 text-indigo-600">
            Registration
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right ticket for&nbsp;you
          </p>
        </div>
        {/* <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">
          Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in.
          Explicabo id ut laborum.
        </p> */}
        <div className="mt-20 flow-root">
          <div className="isolate -mt-16 grid max-w-sm grid-cols-2 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-4 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-2 lg:pt-0 xl:px-4">
                <h3
                  id={tier.id}
                  className="text-2xl font-semibold leading-7 text-gray-900"
                >
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-2xl font-bold tracking-tight text-gray-900">
                    {tier.price.dollor}
                  </span>
                  <span className="text-2xl font-bold tracking-tight text-gray-900">
                    {' '}
                    / {tier.price.won}
                  </span>
                  {/* <span className="text-sm font-semibold leading-6 text-gray-600">/month</span> */}
                </p>
                {/* <p className="mt-3 text-sm leading-6 text-gray-500">{tier.price.won} per month if paid annually</p> */}
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buy ticket
                </a>
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">
                  {tier.description}
                </p>
                <ul
                  role="list"
                  className="mt-6 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}



function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="bg-sky-50">
      <div className="-my-4 flex justify-center gap-3 overflow-hidden py-10 sm:gap-5 sm:py-10">
        {[
          '/images/2026/main/BUK_6293.jpg',
          '/images/2026/main/BUK_9087.jpg',
          '/images/2026/main/Z62_1311.jpg',
          '/images/2026/main/Z62_1435.jpg',
          '/images/2026/main/Z62_4630.jpg',
        ].map((image, imageIndex) => (
          <div
            key={image}
            className={clsx(
              'relative aspect-[9/10] w-36 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-60 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              fill
              className={clsx(
                'absolute inset-0 h-full w-full object-cover',
                imageIndex === 1 && 'brightness-[0.9]',
              )}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
            {/* Software designer, founder, and amateur astronaut. */}
            KLHC 2026 (a.k.a. Camp Swing It)
          </h1>
          <p className="mt-1 text-base font-semibold text-zinc-600">
            Korean Lindy Hop Championships & Camp Swing It
          </p>

          <p className="mt-6 text-base text-zinc-600 ">
            {/* Camp Swing It description<br/> */}
            3-5 APR 2026
            <br />
            Kyungsung Hall, Seoul, Korea
            (경성홀, 서울)
          </p>
          {/* <p className="mt-6 text-base text-blue-600 ">
            CSI 2025 1st Ticket registration will be open from 18 DEC to 15 JAN 2025.<br/>
          </p>
          <p className="mt-2 text-base text-blue-600 ">
            (CSI 2025 1차 티켓 판매가 12월 18일 ~  2025년 1월 15일에 열립니다.)
          </p> */}
          <p className="mt-6 text-base font-bold text-zinc-600">
            아시아를 넘어 전 세계 스윙댄서들이 함께하는 스윙댄서의 명절!
            <br />
            The Ultimate Holiday for Swing Dancers in Asia and Beyond!
            <br />
            跨越亚洲，汇聚世界各地摇摆舞者的盛大节日！
          </p>
          <p className="mt-6 text-base font-bold text-zinc-600">Coming Soon!</p>

          <div className="mt-6 flex items-center gap-6">
            <SocialLink
              href="https://www.facebook.com/CampSwingIt"
              aria-label="Follow on Facebook"
              icon={FacebookIcon}
            />
            <SocialLink
              href="https://www.instagram.com/campswingit/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            {/* <SocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            /> */}
            {/* <SocialLink
              href="https://linkedin.com"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
          <div className="mt-10">
            <YoutubeVideo videoId="dZ8-7eAUJ-U" title="Camp Swing It 2026 Teaser" />
          </div>
        </div>
      </Container>
      <Photos />
      <AboutPreview />

      <div className="bg-gray-50 py-24 sm:py-32">
        <Container>
          <div className="mx-auto">
            <div className="flex flex-col gap-12">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                NOTICE
              </h2>
              <div className="flex flex-col gap-6">
                {/* Korean */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-zinc-400">한국어</h3>
                  {articles
                    .filter((article) => article.slug.endsWith('-kr'))
                    .slice(0, 1)
                    .map((article) => (
                      <Article
                        key={article.slug}
                        article={article}
                        badgeLabel={
                          article.slug === 'csi2026-01-13-notice-kr'
                            ? 'New'
                            : undefined
                        }
                        highlight={article.slug === 'csi2026-01-13-notice-kr'}
                      />
                    ))}
                </div>

                {/* English */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-zinc-400">English</h3>
                  {articles
                    .filter((article) => article.slug.endsWith('-en'))
                    .slice(0, 1)
                    .map((article) => (
                      <Article
                        key={article.slug}
                        article={article}
                        badgeLabel={
                          article.slug === 'csi2026-01-13-notice-en'
                            ? 'New'
                            : undefined
                        }
                        highlight={article.slug === 'csi2026-01-13-notice-en'}
                      />
                    ))}
                </div>

                {/* Chinese */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-medium text-zinc-400">中文</h3>
                  {articles
                    .filter((article) => article.slug.endsWith('-cn'))
                    .slice(0, 1)
                    .map((article) => (
                      <Article
                        key={article.slug}
                        article={article}
                        badgeLabel={
                          article.slug === 'csi2026-01-13-notice-cn'
                            ? 'New'
                            : undefined
                        }
                        highlight={article.slug === 'csi2026-01-13-notice-cn'}
                      />
                    ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      {/* <Container className="mt-9">
        <About/>
      </Container> */}
      {/* <Container className="mt-24 md:mt-28"> */}
      {/* <Container className="mt-9">
        <hr />
        <Instructors />
        <LocalInstructors />
        <hr className="mt-9"/>

        <Band />
        <hr />
        <DJs/>

      </Container> */}
      {/* <Photos /> */}
      {/* <Container className="mt-9">
      </Container> */}
      {/* <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container> */}
    </>
  )
}

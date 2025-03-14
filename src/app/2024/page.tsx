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
import logoAirbnb from '@/images/logos/airbnb.svg'
import logoFacebook from '@/images/logos/facebook.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoStarbucks from '@/images/logos/starbucks.svg'
import image2 from '@/images/photos/main_01.png'
import image3 from '@/images/photos/main_02.png'
import image4 from '@/images/photos/main_03.png'
import image5 from '@/images/photos/main_04.png'
import image1 from '@/images/photos/main_05.png'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

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

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
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
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

const instructor_people= [
  {
    name: 'Katja and Peter',
    // name: 'Peter Loggins & Katja Završnik',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/Peter&Katja.png'
      // 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
  {
    name: 'Hanna and Mattias',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/Hanna&Mattias.png'
  },
  {
    name: 'Sharon and Juan',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/Sharon&Juan.png'

  },
  {
    name: 'Laia and Gustav',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/Gustav&Laia.png'
  },
  {
    name: 'Sing Lim',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/SingLim.png'
  },
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

function Instructors() {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dancers</h2>
         <p className="mt-6 text-lg leading-8 text-gray-600">
          More Local Dancers will be announced. <br/>
          (로컬 댄서 라인업이 추가로 업데이트 될 예정입니다.) 
         </p>
          {/* The 2024 artists line up of Camp Swing It is as follows. */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-3 lg:mx-0 lg:max-w-none"
        >
          {instructor_people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-42 w-42 rounded-full" src={person.imageUrl} alt="" />
              <h3 className="mt-6 text-xl font-semibold Gleading-7 tracking-tight text-gray-900">{person.name}</h3>
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
    name: ' Swing It Orchestra (20 Pieces Big Band)',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/images/2024/total_band.jpeg',
    bio: 'London\'s top vintage band, the Shirt Tail Stompers are firmly established at home and internationally playing Harlem Swing and the Hot Jazz of the 1920s, 30s and 40s. Featuring music from composers such as Duke Ellington, Benny Goodman and Count Basie.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Brother Yusef',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/images/2024/band_02.png',
    bio: 'Brother Yusef is a self-taught musician and has been described as a master solo guitarist and a uniquely passionate vocalist. His performances are raw, honest, and as real as the genre has ever aspired to be.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Shirt Tail Stompers Feat. Sara Oschlag',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/images/2024/band_03.png',
    bio: 'London\'s top vintage band, the Shirt Tail Stompers are firmly established at home and internationally playing Harlem Swing and the Hot Jazz of the 1920s, 30s and 40s. Featuring music from composers such as Duke Ellington, Benny Goodman and Count Basie.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Adamas Kim And The Rhythm Shufflers',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/images/2024/band_01.png',
    bio: 'This is a band specializing in vintage dance music like early jazz, swing, and boogie-woogie, known for their 9-10 member lineup. They focus on enjoying dance and music together, gaining fame in the swing dance scene since their 2019 debut, and work to popularize vintage jazz culture.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  // More people...
]

function Band() {
  return (
  <div className="bg-white py-8 md:py-12">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Musicians</h2>
      <div>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Have you ever dreamed of dancing to a big band? If so, meet CSI&apos;s house band, Swing It Orchestra! <br/>
          (빅 밴드 음악에 맞춰 스윙댄스를 추는 꿈을 꿔보신 적이 있으신가요? 그렇다면 CSI의 하우스밴드 스윙잇 오케스트라를 만나보세요!)
      </p>
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

      <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className='p-8'>
                <img className="aspect-[1/1] rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              </div>
              {/* <p className="text-base leading-7 text-gray-600">{person.role}</p> */}
            </li>
          ))}
        </ul>
    </div>
  )
}

const dj_people= [
  {
    // name: 'Coming soon',
    name: 'DJ HaeRim',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/dj4.png'
  },
  {
    name: 'DJ Philippe',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/dj2.png'
  },
  {
    name: 'DJ Major',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/dj3.png'

  },
  {
    name: 'DJ Juan',
    // name: 'Peter Loggins & Katja Završnik',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/dj1.png'
      // 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
  },
]

function DJs() {
  return (
    <div className="bg-white py-8 sm:py-12">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">DJs</h2>
         <p className="mt-6 text-lg leading-8 text-gray-600">
          {/* More Local Dancers will be announced. <br/>
          (로컬 댄서 라인업이 추가로 업데이트 될 예정입니다.)  */}
         </p>
          {/* The 2024 artists line up of Camp Swing It is as follows. */}
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none"
        >
          {dj_people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-42 w-42 rounded-xl " src={person.imageUrl} alt="" />
              {/* <img className="mx-auto h-42 w-42 rounded-full" src={person.imageUrl} alt="" /> */}
              <h3 className="mt-6 text-xl font-semibold Gleading-7 tracking-tight text-gray-900">{person.name}</h3>
              {/* <p className="text-sm leading-6 text-gray-600">{person.description}</p> */}
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
    features: [
      'Accommodation included', 
      'Basic 2 nights. 1 night optional',
    ],
  },
  {
    name: 'Accommodation',
    id: 'tier-accommodation',
    href: '#',
    price: { dollor: '$15', won: '₩12' },
    description: 'Everything in Basic, plus essential tools for growing your business.',
    features: [
      'Accommodation included', 
      'Basic 2 nights. 1 night optional',
    ],
  },
  {
    name: 'Meals',
    id: 'tier-meals',
    href: '#',
    price: { dollor: '$15', won: '₩12' },
    description: 'Everything in Basic, plus essential tools for growing your business.',
    features: [
      'Accommodation included', 
      'Basic 2 nights. 1 night optional',
    ],
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
    description: 'Everything in Basic, plus essential tools for growing your business.',
    features: [
      'Saturday accommodation included, Sunday optional',
      'Saturday kids\' lessons',
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
          <h2 className="text-2xl font-semibold leading-7 text-indigo-600">Registration</h2>
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
                <h3 id={tier.id} className="text-2xl font-semibold leading-7 text-gray-900">
                  {tier.name}
                </h3>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-2xl font-bold tracking-tight text-gray-900">{tier.price.dollor}</span>
                  <span className="text-2xl font-bold tracking-tight text-gray-900"> / {tier.price.won}</span>
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
                <p className="mt-10 text-sm font-semibold leading-6 text-gray-900">{tier.description}</p>
                <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckCircleIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
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

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  title: string
  place_en: string
  place_kr: string
  // logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      {/* <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div> */}
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Title</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 ">
          {role.title}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 ">
          {role.place_kr} <br/>
          {role.place_en}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 "
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    // {
    //   company: 'Planetaria',
    //   title: 'CEO',
    //   logo: logoPlanetaria,
    //   start: '2019',
    //   end: {
    //     label: 'Present',
    //     dateTime: new Date().getFullYear().toString(),
    //   },
    // },
    // {
    //   company: 'Pakage will be open soon',
    //   title: 'TBD',
    //   start: '?? Dec 2023',
    //   end: '',
    // },
    {
      title: 'KLHC',
      place_en: 'At CheongShim International Youth Centor',
      place_kr: '청심국제청소년수련원',
      start: '5 Apr',
      end: '7 Apr',
    },
    {
      title: 'Camp Swing It',
      place_en: 'At CheongShim International Youth Centor',
      place_kr: '청심국제청소년수련원',
      start: '5 Apr',
      end: '7 Apr',
    },
    // {
    //   company: 'Starbucks',
    //   title: 'At CheongShim International Youth Centor',
    //   logo: logoStarbucks,
    //   start: '2008',
    //   end: '2011',
    // },
  ]

  return (
    <div className="rounded-2xl mt-8 border border-zinc-100 p-6 ">
      <h2 className="flex text-sm font-semibold text-zinc-900">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Brief schedule</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600" />
      </Button> */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
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
            Camp Swing It 2024
          </h1>
          <p className="mt-6 text-base text-zinc-600 ">
            {/* Camp Swing It description<br/> */}
            5-7 APR 2024<br/>
            CheongShim International Youth Center, Gapyong, Korea<br/>
            (청심국제청소년수련원, 가평)
          </p>
          <div className="mt-6 flex gap-6">
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
        </div>
      </Container>
      <Photos />
      <Container className="mt-9">
        <div className="bg-white py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">ABOUT</h2>
          <div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              C.S.I. is an abbreviation for “Camp Swing It”,
              a Swing Camp started in 2009, 
              and is a Swing Dance Camp that truly represents 
              not only the Korean Swing Dance Scene,
              but also the whole Asia. 
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              It is an all-round Dance Event that covers 
              a wide range of swing dances; including Balboa,
              Boogie-Woogie, Blues, and Tap, with a focus on Lindy Hop.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              (C.S.I. 는 “Camp Swing It”의 약자로서 2009년부터 시작된 스윙캠프로서 대한민국 스윙댄스씬 뿐만이 아니라 아시아를 대표하는 스윙댄스캠프입니다. 그리고 린디합을 중심으로 발보아, 부기우기, 블루스, 탭 등 스윙댄스를 폭넓게 다루는 올라운드 댄스 행사를 추구합니다.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              이제 막 춤을 시작한 댄서에서 부터 여러 행사에서 두각을 나타내고 있는 프로댄서들까지 하나가 되어 만들어가는 이 행사는, 3박4일간 국내외 챔피언들의 워크샵과 라이브 밴드와 함께하는 파티, 그리고 국내 최고의 린디합 대회인 K.L.H.C.(Korean Lindy Hop Championships)가 함께하는 진정한 “댄서들의 축제” 입니다.)
            </p>
          </div>
        </div>
      </Container>
      {/* <Container className="mt-24 md:mt-28"> */}
      <Container>
        <hr/>
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2 mt-9">
          <div className="flex flex-col gap-12">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">NOTICE</h2>
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            {/* <Newsletter /> */}
            <Resume />
          </div>
        </div>
      </Container>
      <Container className="mt-9">
        <hr/>
        <Instructors />
        <hr/>
        <Band />
        <hr/>
        {/* <Ticket /> */}
        <DJs/>
        {/* <div className="bg-white py-8 md:py-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">DJs</h2>
          <div>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              TBD
          </p>
          </div>
        </div> */}
      </Container>
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

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
import image1 from '@/images/photos/main_01.png'
import image2 from '@/images/photos/main_02.png'
import image3 from '@/images/photos/main_03.png'
import image4 from '@/images/photos/main_04.png'
import image5 from '@/images/photos/main_05.png'
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
    name: 'Dax & ?',
    role: 'Senior Designer',
    imageUrl:
      '/images/2024/dax&shadow.png'

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
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Instructors</h2>
            The 2024 artists line up of Camp Swing It is as follows.
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none"
        >
          {instructor_people.map((person) => (
            <li key={person.name}>
              <img className="mx-auto h-36 w-36 rounded-full" src={person.imageUrl} alt="" />
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
    name: 'Shirt Tail Stompers - Full Band',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/images/2024/band_03.png',
    bio: 'London\'s top vintage band, the Shirt Tail Stompers are firmly established at home and internationally playing Harlem Swing and the Hot Jazz of the 1920s, 30s and 40s. Featuring music from composers such as Duke Ellington, Benny Goodman and Count Basie.',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'ADAMAS KIM and the RHYTHM SHUFFLERS',
    role: 'Co-Founder / CEO',
    imageUrl:
      '/images/2024/band_01.png',
    bio: 'This is a band specializing in vintage dance music like early jazz, swing, and boogie-woogie, known for their 9-10 member lineup. They focus on enjoying dance and music together, gaining fame in the swing dance scene since their 2019 debut, and work to popularize vintage jazz culture.',
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
  // More people...
]

function Band() {
  return (
  <div className="bg-white py-8 md:py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About the band</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          "Experience the ultimate jazz fusion with the Shirt Tail Stompers and ADAMAS KIM and the RHYTHM SHUFFLERS! A blend of Harlem Swing and early jazz for a night of exhilarating rhythms."
          </p>
        </div>
        <ul role="list" className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li key={person.name} className="flex flex-col gap-10 pt-12 sm:flex-row">
              <img className="aspect-[4/5] w-52 flex-none rounded-2xl object-cover" src={person.imageUrl} alt="" />
              <div className="max-w-xl flex-auto">
                <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
                {/* <p className="text-base leading-7 text-gray-600">{person.role}</p> */}
                <p className="mt-6 text-base leading-7 text-gray-600">{person.bio}</p>
                {/* <ul role="list" className="mt-6 flex gap-x-6">
                  <li>
                    <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Twitter</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">LinkedIn</span>
                      <svg className="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </li>
                </ul> */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}


const tiers = [
  {
    name: 'Full Workshop Package',
    id: 'tier-basic',
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
    name: 'Full Party Package',
    id: 'tier-essential',
    href: '#',
    price: { dollor: '$15', won: '₩12' },
    description: 'Everything in Basic, plus essential tools for growing your business.',
    features: [
      'Accommodation included', 
      'Basic 2 nights. 1 night optional',
    ],
  },
  {
    name: 'Day Pass Package',
    id: 'tier-essential',
    href: '#',
    price: { dollor: '$15', won: '₩12' },
    description: 'Everything in Basic, plus essential tools for growing your business.',
    features: [
      'Accommodation not included', 
      'Friday, Saturday, Sunday each', 
    ],
  },
  {
    name: 'Kids Package',
    id: 'tier-essential',
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
          <div className="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-2 lg:divide-x lg:divide-y-0 xl:-mx-4">
            {tiers.map((tier) => (
              <div key={tier.id} className="pt-16 lg:px-8 lg:pt-0 xl:px-14">
                <h3 id={tier.id} className="text-3xl font-semibold leading-7 text-gray-900">
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
  company: string
  title: string
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
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
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
    {
      company: 'Pakage will be open soon',
      title: 'TBD',
      start: '?? Dec 2023',
      end: '',
    },
    {
      company: 'KLHC',
      title: 'TBD',
      start: '30 Mar',
      end: '',
    },
    {
      company: 'Camp Swing It',
      title: 'At CheongShim International Youth Centor',
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
    <div className="rounded-2xl mt-8 border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
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
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
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
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
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
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {/* Software designer, founder, and amateur astronaut. */}
            Camp Swing It 2024
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {/* Camp Swing It description<br/> */}
            5-7 Apr, 30 Mar <br/>
            At CheongShim International Youth Centor<br/>
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
        <Resume />
        <Instructors />
        <hr/>
        <Band />
        <hr/>
        <Ticket />
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

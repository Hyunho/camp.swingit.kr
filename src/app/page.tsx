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
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'
import { formatDate } from '@/lib/formatDate'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

import { LocalInstructors } from '@/components/LocalInstructors'
import { Staffs } from '@/components/Staffs'
import { Instructors } from '@/components/Instructors'
import { Band } from '@/components/Band'

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
  langLabel,
  highlight = false,
  className,
}: {
  article: ArticleWithSlug
  badgeLabel?: string
  langLabel?: string
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
      {langLabel && (
        <p className="relative z-10 mb-1 text-xs font-medium text-zinc-400">
          {langLabel}
        </p>
      )}
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
        <div className="max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
            KLHC 2026<br />
            <span className="mt-2 inline-block text-3xl font-bold text-zinc-900 sm:text-4xl lg:text-[2.2rem] lg:leading-[2.5rem]">
              a.k.a. Camp Swing It
            </span>
          </h1>
          <p className="mt-4 text-lg font-semibold text-amber-600">
            Korean Lindy Hop Championships & Camp Swing It
          </p>

          <p className="mt-8 text-lg font-medium leading-relaxed text-zinc-600">
            3-5 APR 2026
            <br />
            Kyungsung Hall, Seoul, Korea (경성홀, 서울)
          </p>
          {/* <p className="mt-6 text-base text-blue-600 ">
            CSI 2025 1st Ticket registration will be open from 18 DEC to 15 JAN 2025.<br/>
          </p>
          <p className="mt-2 text-base text-blue-600 ">
            (CSI 2025 1차 티켓 판매가 12월 18일 ~  2025년 1월 15일에 열립니다.)
          </p> */}
          <div className="mt-8 space-y-2 text-lg font-medium text-zinc-700">
            <p>아시아를 넘어 전 세계 스윙댄서들이 함께하는 스윙댄서의 명절!</p>
            <p>The Ultimate Holiday for Swing Dancers in Asia and Beyond!</p>
            <p>跨越亚洲，汇聚世界各地摇摆舞者的盛大节日！</p>
          </div>
          <div className="mt-10 flex gap-4">
            <Link
              href="https://www.festivall.my/ko/events/buy-tickets/KLHC-2026"
              target="_blank"
              className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-6 py-2 text-lg font-bold text-white shadow-md hover:from-amber-500 hover:to-orange-600 transition-colors"
            >
              Registration
            </Link>
          </div>

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

      <div className="bg-gray-50 py-12 sm:py-16">
        <Container>
          <div className="mx-auto">
            <div className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                NOTICE
              </h2>
              <div className="flex flex-col gap-4">
                {/* Korean */}
                {articles
                  .filter((article) => article.slug.endsWith('-kr'))
                  .slice(0, 1)
                  .map((article) => (
                    <Article
                      key={article.slug}
                      article={article}
                      langLabel="한국어"
                      badgeLabel={
                        article.slug === 'klhc2026-instructor-change-kr'
                          ? 'New'
                          : undefined
                      }
                      highlight={article.slug === 'klhc2026-instructor-change-kr'}
                    />
                  ))}

                {/* English */}
                {articles
                  .filter((article) => article.slug.endsWith('-en'))
                  .slice(0, 1)
                  .map((article) => (
                    <Article
                      key={article.slug}
                      article={article}
                      langLabel="English"
                      badgeLabel={
                        article.slug === 'klhc2026-instructor-change-en'
                          ? 'New'
                          : undefined
                      }
                      highlight={article.slug === 'klhc2026-instructor-change-en'}
                    />
                  ))}

                {/* Chinese */}
                {articles
                  .filter((article) => article.slug.endsWith('-cn'))
                  .slice(0, 1)
                  .map((article) => (
                    <Article
                      key={article.slug}
                      article={article}
                      langLabel="中文"
                      badgeLabel={
                        article.slug === 'klhc2026-instructor-change-cn'
                          ? 'New'
                          : undefined
                      }
                      highlight={article.slug === 'klhc2026-instructor-change-cn'}
                    />
                  ))}
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="flex flex-col gap-y-16 py-16">
        <Container>
          <Instructors />
        </Container>
        <Container>
          <Band />
        </Container>
        <Container>
          <Staffs />
        </Container>
      </div>
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

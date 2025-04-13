import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  InstagramIcon,
  FacebookIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          The Ultimate Holiday for Swing Dancers in Asia and Beyond!<br/>
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              C.S.I. is an abbreviation for “Camp Swing It”, a Swing Camp started in 2009, 
              and is a Swing Dance Camp that truly represents not only the Korean Swing Dance Scene, 
              but also the whole Asia. It is an all-round Dance Event that covers a wide range of swing dances; 
              including Balboa, Boogie-Woogie, Blues, and Tap, with a focus on Lindy Hop.
            </p>
            <p>
              This event is created by everyone from dancers who have just started 
              dancing to professional dancers who have distinguished themselves at 
              various events.3 nights and 4 days of workshops by famous dancers, 
              parties with live bands, and K.L.H.C. (Korean Lindy Hop Championships), 
              the best Lindy Hop competition in the country. It can be said to be a 
              “Festival Of Dancers.”
            </p>
            <p>
              (C.S.I. 는 “Camp Swing It”의 약자로서 2009년부터 시작된 스윙캠프로서 대한민국 스윙댄스씬 
              뿐만이 아니라 아시아를 대표하는 스윙댄스캠프입니다. 그리고 린디합을 중심으로 발보아, 
              부기우기, 블루스, 탭 등 스윙댄스를 폭넓게 다루는 올라운드 댄스 행사를 추구합니다.
            </p>
            <p>
              이제 막 춤을 시작한 댄서에서 부터 여러 행사에서 두각을 나타내고 있는 프로댄서들까지 하나가 되어 
              만들어가는 이 행사는, 3박4일간 국내외 챔피언들의 워크샵과 라이브 밴드와 함께하는 파티, 
              그리고 국내 최고의 린디합 대회인 K.L.H.C.(Korean Lindy Hop Championships)가 함께하는 
              진정한 “댄서들의 축제” 입니다.)
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            {/* <SocialLink href="#" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink> */}
            <SocialLink href="https://www.facebook.com/CampSwingIt" icon={FacebookIcon} className="mt-4">
              Follow on Facebook
            </SocialLink>
            <SocialLink href="https://www.instagram.com/campswingit/" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            {/* <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink> */}
            {/* <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink> */}
            {/* <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              spencer@planetaria.tech
            </SocialLink> */}
          </ul>
        </div>
      </div>
    </Container>
  )
}

'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

export function AboutPreview() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white py-8 md:py-12">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ABOUT
          </h2>
        </div>
        <div className="mx-auto mt-6 max-w-2xl lg:max-w-none">
          <div className="space-y-6 text-lg leading-8 text-gray-600">
             <p className={clsx(!isExpanded && 'line-clamp-1')}>
              C.S.I. is an abbreviation for “Camp Swing It”, a Swing Camp started in
              2009, and is a Swing Dance Camp that truly represents not only the
              Korean Swing Dance Scene, but also the whole Asia. It is an all-round
              Dance Event that covers a wide range of swing dances; including
              Balboa, Boogie-Woogie, Blues, and Tap, with a focus on Lindy Hop.
            </p>
             {isExpanded && (
               <>
                <p>
                  This event is created by everyone from dancers who have just started
                  dancing to professional dancers who have distinguished themselves at
                  various events.3 nights and 4 days of workshops by famous dancers,
                  parties with live bands, and K.L.H.C. (Korean Lindy Hop
                  Championships), the best Lindy Hop competition in the country. It can
                  be said to be a “Festival Of Dancers.”
                </p>
               </>
             )}
            <p className={clsx(!isExpanded && 'line-clamp-1')}>
              (C.S.I. 는 “Camp Swing It”의 약자로서 2009년부터 시작된 스윙캠프로서
              대한민국 스윙댄스씬 뿐만이 아니라 아시아를 대표하는
              스윙댄스캠프입니다. 그리고 린디합을 중심으로 발보아, 부기우기, 블루스,
              탭 등 스윙댄스를 폭넓게 다루는 올라운드 댄스 행사를 추구합니다.
            </p>
            {isExpanded && (
               <>
                <p>
                  이제 막 춤을 시작한 댄서에서 부터 여러 행사에서 두각을 나타내고 있는
                  프로댄서들까지 하나가 되어 만들어가는 이 행사는, 3박4일간 국내외
                  챔피언들의 워크샵과 라이브 밴드와 함께하는 파티, 그리고 국내 최고의
                  린디합 대회인 K.L.H.C.(Korean Lindy Hop Championships)가 함께하는
                  진정한 “댄서들의 축제” 입니다.)
                </p>
               </>
             )}
          </div>
          <div className="mt-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              {isExpanded ? 'Show less' : 'Read more'} <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

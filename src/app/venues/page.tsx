import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import Image from 'next/image'

export default function VenuesPage() {
    return (
        <div className="bg-white py-12 md:py-16">
            <Container>
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Venues
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        Join us at our main venue for the event.
                    </p>
                </div>

                <div className="mx-auto mt-10 max-w-2xl gap-y-16 lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-8">
                    {/* Venue Info */}
                    <div className="order-2 lg:order-1">
                        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-900/10 sm:p-10">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Kyungsung Hall</h3>
                            <h4 className="mt-1 text-xl font-semibold text-gray-800">경성홀</h4>

                            <dl className="mt-8 space-y-6 text-base leading-7 text-gray-600">
                                <div className="flex gap-x-4">
                                    <dt className="flex-none">
                                        <span className="sr-only">Address</span>
                                        <svg className="h-6 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                            <path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.006.003.002.001.003.001a.75.75 0 01-.69 1.353l-.057-.028a13.332 13.332 0 01-1.137-.634c-.88-.546-1.99-1.376-3.066-2.43C3.34 14.86 2 12.73 2 9a8 8 0 1116 0c0 4.102-1.636 6.55-3.327 7.965-1.127.944-2.28 1.638-3.082 2.072a11.977 11.977 0 01-.892.428l-.05.022a.75.75 0 01-.958-1.558l.056-.027a13.25 13.25 0 001.042-.58c.783-.48 1.767-1.157 2.766-1.993C15.364 15.349 17 13.197 17 9a6 6 0 10-12 0c0 3.473 1.398 5.373 2.85 6.772.723.696 1.545 1.259 2.164 1.644.331.206.593.357.778.455l.02.01.003.001z" clipRule="evenodd" />
                                            <path d="M10 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                                        </svg>
                                    </dt>
                                    <dd className="flex flex-col">
                                        <span className="block text-gray-900">56-6 Nogosan-dong, Mapo-gu, Seoul</span>
                                        <span className="block text-sm text-gray-500">서울특별시 마포구 노고산동 56-6</span>
                                    </dd>
                                </div>
                            </dl>

                            <div className="mt-8 pt-8 border-t border-gray-200/50">
                                <Button
                                    href="https://maps.app.goo.gl/Mb65ipPjNc6ch4i68"
                                    target="_blank"
                                    variant="primary"
                                    className="w-full sm:w-auto"
                                >
                                    View on Google Maps &rarr;
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Images */}
                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                            <Image
                                src="/images/2026/venues/Kyungsung-Hall.png"
                                alt="Kyungsung Hall"
                                width={1192}
                                height={665}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div className="relative overflow-hidden rounded-2xl shadow-xl bg-gray-100">
                            <Image
                                src="/images/2026/venues/Kyungsung-Hall-map.png"
                                alt="Kyungsung Hall Map"
                                width={278}
                                height={319}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

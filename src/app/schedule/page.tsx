import { Container } from '@/components/Container'
import Link from 'next/link'

export default function Schedule() {
    return (
        <Container className="py-16">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
                    Schedule
                </h2>
                
                <div className="space-y-4">
                    <Link 
                        href="/schedule/event"
                        className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-200 hover:border-blue-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    CSI Event Schedule
                                </h3>
                                <p className="text-gray-600">
                                    View the CSI event schedule
                                </p>
                            </div>
                            <svg 
                                className="w-6 h-6 text-gray-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </Link>

                    <Link 
                        href="/schedule/class"
                        className="block p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out border border-gray-200 hover:border-blue-500"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                    CSI Class Schedule
                                </h3>
                                <p className="text-gray-600">
                                    View the workshop and class schedule
                                </p>
                            </div>
                            <svg 
                                className="w-6 h-6 text-gray-400" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </Container>
    )
}

import { Container } from '@/components/Container'

export default function Schedule() {
    return (
        <Container>
            <h1>Class Schedule</h1>
            {/* 모바일 버전 */}
            <div className="md:hidden w-screen h-[calc(100vh-64px)] overflow-hidden">
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQEJsUY0T_ChvMz_Y6ijCDDwWarTQTwLDCIvMKBBl65FWJ-yDP19Tp5IYaQ22u26hJTTYdKb97Xx-Nx/pubhtml?gid=2096327465&amp;single=true&amp;widget=true&amp;headers=false"
                    className="w-full h-full border-none absolute inset-0"
                />
            </div>
            {/* 데스크탑 버전 */}
            <div className="hidden md:block fixed top-16 left-0 right-0 bottom-0 w-screen h-[calc(100vh-64px)] overflow-hidden">
                <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQEJsUY0T_ChvMz_Y6ijCDDwWarTQTwLDCIvMKBBl65FWJ-yDP19Tp5IYaQ22u26hJTTYdKb97Xx-Nx/pubhtml?gid=1774345331&amp;single=true&amp;widget=true&amp;headers=false"
                    className="w-full h-full border-none absolute inset-0"
                />
            </div>
        </Container>
    )
}

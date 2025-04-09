import Image from 'next/image';
import { SimpleLayout } from '@/components/SimpleLayout';

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
    { name: '채르', },
    { name: '번쩍번쩍호랑이', },
    { name: '맥주피쳐', },
    { name: '주르', },
    { name: '꼬냥이', },
    { name: '혀기', },
    { name: '북실북실', },
    { name: '만듀', },
    { name: '칠면조', },
    { name: '죠죠', },
    { name: 'B.B.', },
    { name: '모찌', },
    { name: 'Orlando', },
    { name: '미노', },
  ]
  
  export default function Staffs() {
    return (
      <SimpleLayout title="Staffs" intro="">
      <div className="p-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {staffs.map((staff) => (
              <div key={staff.name} className="bg-white rounded-2xl shadow p-2 flex flex-col items-center text-center">
                {staff.imageurl ? (
                  <div className="w-full aspect-square flex flex-col items-center">
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                      <Image 
                        src={staff.imageurl} 
                        alt={staff.name} 
                        fill
                        className="rounded-full object-cover" 
                      />
                    </div>
                    <div className="text-sm font-semibold mt-2">{staff.name}</div>
                  </div>
                ) : (
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full flex items-center justify-center">
                    <span className="font-medium text-lg">{staff.name}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      </SimpleLayout>
    )
  }
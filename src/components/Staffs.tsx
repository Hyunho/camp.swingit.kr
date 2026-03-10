import Image from 'next/image'

type StaffGroup = 'CORE' | 'CREW' | 'MEDIA TEAM' | 'SPECIAL MATE'

interface Staff {
  id: string
  name: string
  group: StaffGroup
  imageUrl?: string
  imageClasses?: string
}

const staffs: Staff[] = [
  {
    id: 'staff-adamas',
    name: 'Adamas',
    group: 'CORE',
    imageUrl: '/images/2026/STAFF/image29.png',
  },
  {
    id: 'staff-deulla',
    name: '들라',
    group: 'CORE',
    imageUrl: '/images/2026/STAFF/image23.png',
  },
  {
    id: 'staff-chocomir',
    name: '초코미르',
    group: 'CORE',
    imageUrl: '/images/2026/STAFF/chocomir.png',
    imageClasses: 'object-top'
  },
  {
    id: 'staff-jungyang',
    name: '정양',
    group: 'CORE',
    imageUrl: '/images/2026/STAFF/image19.jpg',
  },
  { id: 'staff-chilmyeonjo', name: '칠면조', group: 'CREW', imageUrl: '/images/2026/STAFF/chilmyeonjo.JPG' },
  { id: 'staff-rangbo', name: '랭보', group: 'CREW', imageUrl: '/images/2025/instructors/랭보.jpeg', imageClasses: 'object-top' },
  { id: 'staff-daetteuk', name: '대뜩', group: 'CREW', imageUrl: '/images/2025/staff/대뜩.jpeg', imageClasses: 'object-top' },
  { id: 'staff-elli', name: '엘리', group: 'CREW', imageUrl: '/images/2025/staff/엘리.jpeg', imageClasses: 'object-top' },
  { id: 'staff-karen', name: '카렌', group: 'CREW', imageUrl: '/images/2025/staff/카렌.jpeg', imageClasses: 'object-top' },
  { id: 'staff-sini', name: '시니', group: 'CREW', imageUrl: '/images/2025/staff/시니.jpeg', imageClasses: 'object-top' },
  { id: 'staff-hyeonhing', name: '현힁', group: 'CREW', imageUrl: '/images/2025/staff/현힁.jpeg', imageClasses: 'object-top' },
  { id: 'staff-goom', name: '굼', group: 'CREW', imageUrl: '/images/2026/STAFF/goom.png' },
  { id: 'staff-crew-tba', name: 'TO BE ADDED', group: 'CREW' },
  { id: 'staff-maria', name: '마리아', group: 'MEDIA TEAM', imageUrl: '/images/2026/STAFF/maria.png' },
  { id: 'staff-media-tba', name: 'TO BE ADDED', group: 'MEDIA TEAM' },
  { id: 'staff-seonghong', name: 'Seonghong Kim(독립군)', group: 'SPECIAL MATE', imageUrl: '/images/2026/STAFF/seonghong.png' },
  { id: 'staff-sage-min', name: 'Sage Min', group: 'SPECIAL MATE', imageUrl: '/images/2026/STAFF/sage-min.png' },
]

const staffGroupOrder: StaffGroup[] = [
  'CORE',
  'CREW',
  'MEDIA TEAM',
  'SPECIAL MATE',
]

const groupedStaffs = staffGroupOrder.map((group) => ({
  group,
  members: staffs.filter((staff) => staff.group === group),
}))

export function Staffs() {
  return (
    <div className="bg-white py-8 dark:bg-zinc-900 sm:py-12">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-zinc-100 sm:text-4xl">
          Staffs
        </h2>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-10">
          {groupedStaffs.map(({ group, members }) => (
            <section
              key={group}
              className="rounded-2xl bg-zinc-50 p-4 dark:bg-zinc-800/40"
            >
              <h3 className="mb-4 text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-300">
                {group}
              </h3>
              <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 lg:grid-cols-5">
                {members.map((staff) =>
                  staff.name === 'TO BE ADDED' ? (
                    <div
                      key={staff.id}
                      className="flex flex-col items-center rounded-2xl border-2 border-dashed border-zinc-300 p-2 text-center dark:border-zinc-600"
                    >
                      <div className="relative aspect-square w-full rounded-xl">
                        <div className="flex h-full w-full items-center justify-center text-xs font-medium tracking-wide text-zinc-400 dark:text-zinc-500">
                          TO BE<br />ADDED
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div
                      key={staff.id}
                      className="flex flex-col items-center rounded-none bg-white p-2 text-center shadow dark:bg-zinc-800"
                    >
                      <div className="relative aspect-square w-full overflow-hidden rounded-none bg-zinc-100 dark:bg-zinc-700">
                        {staff.imageUrl ? (
                          <Image
                            src={staff.imageUrl}
                            alt={`${staff.name} staff photo`}
                            fill
                            sizes="(min-width: 1024px) 16vw, (min-width: 640px) 28vw, 45vw"
                            className={`object-cover ${staff.imageClasses || ''}`}
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                            {staff.name}
                          </div>
                        )}
                      </div>
                      {staff.imageUrl && (
                        <div className="mt-3 text-base font-semibold text-zinc-900 dark:text-zinc-100">
                          {staff.name}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}

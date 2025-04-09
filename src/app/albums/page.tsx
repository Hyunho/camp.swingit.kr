import { SimpleLayout } from '@/components/SimpleLayout'


export default function Album() {
  return (
    <SimpleLayout title="CSI Album" intro="">
      <div>
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">CSI 2025 Album</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          <ul className="list-disc pl-6">
            <li>
              <a href="https://photos.app.goo.gl/T5mAsg268eqkbBFH8" className="text-teal-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Photos by 북실</a>
            </li>
            <li>
              <a href="https://photos.app.goo.gl/9QvDtpHXgXAuFMXk6" className="text-teal-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Photos by 조조</a>
            </li>
            <li>
              <a href="https://mybox.naver.com/share/list?shareKey=i19YPLdFE9JLm3X3LXTi2H7LQKE6WDursxalgZBi04MC" className="text-teal-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Photos by Roger</a>
            </li>
          </ul>
        </p>
      </div>
      <div className="bg-white py-8 sm:py-12">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl">CSI 2024 Album</h2>
        <div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            <ul className="list-disc pl-6">
              <li>
                <a href="https://vvd.bz/gmO0" className="text-teal-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Go to the CSI 2024 Album</a>
              </li>
            </ul>
          </p>
        </div>

      </div>
    </SimpleLayout>
  )
}

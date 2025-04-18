import { SimpleLayout } from '@/components/SimpleLayout'

export default function Album() {
  return (
    <SimpleLayout title="CSI photos" intro="">
      <div className="space-y-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">CSI 2025 Album</h2>
          <div className="space-y-4">
            <ul className="space-y-4">
              <li className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <a href="https://photos.app.goo.gl/T5mAsg268eqkbBFH8" className="text-teal-600 hover:text-teal-700 font-medium flex items-center" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">📸</span>
                  Photos by 북실
                </a>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <a href="https://photos.app.goo.gl/9QvDtpHXgXAuFMXk6" className="text-teal-600 hover:text-teal-700 font-medium flex items-center" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">📸</span>
                  Photos by 죠죠
                </a>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <a href="https://photos.app.goo.gl/pHoMPerTJkHnBWA89" className="text-teal-600 hover:text-teal-700 font-medium flex items-center" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">📸</span>
                  CSI 2025 @Photo Zone By Burno
                </a>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg">
                <div className="text-black font-medium flex items-center mb-3">
                  <span className="mr-2">📸</span>
                  Photos by Roger
                </div>
                <ul className="space-y-2 pl-4">
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors">
                    <a href="https://photos.app.goo.gl/6k4SRgn2L4JbsV1w7" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">Friday</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors">
                    <a href="https://photos.app.goo.gl/AaGmskuxYJTJGzgL6" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">Saturday</a>
                  </li>
                  <li className="hover:bg-gray-100 p-2 rounded transition-colors">
                    <a href="https://photos.app.goo.gl/pF49P2HvS9MLgEi68" className="text-teal-600 hover:text-teal-700" target="_blank" rel="noopener noreferrer">Sunday</a>
                  </li>
                </ul>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <a href="https://photos.app.goo.gl/L3MDqhvqgjdTQm5o9" className="text-teal-600 hover:text-teal-700 font-medium flex items-center" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">📸</span>
                  Photos by Andrew Lin Yikai
                </a>
              </li>
              <li className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
                <a href="https://photos.app.goo.gl/LgjXpWLzcvSfQ4g1A" className="text-teal-600 hover:text-teal-700 font-medium flex items-center" target="_blank" rel="noopener noreferrer">
                  <span className="mr-2">📸</span>
                  Photos by Somebe, Suh Jung Joon
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl mb-6">CSI 2024 Album</h2>
          <div className="bg-gray-50 p-4 rounded-lg hover:bg-gray-100 transition-colors">
            <a href="https://vvd.bz/gmO0" className="text-teal-600 hover:text-teal-700 font-medium flex items-center" target="_blank" rel="noopener noreferrer">
              <span className="mr-2">📸</span>
              Photos by 다깡
            </a>
          </div>
        </div>
      </div>
    </SimpleLayout>
  )
}

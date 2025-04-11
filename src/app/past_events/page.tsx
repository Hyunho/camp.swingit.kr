import { SimpleLayout } from "@/components/SimpleLayout";
import Link from "next/link";

export default function PastEvents() {
  return (
    <SimpleLayout title="Past Events" intro="">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Link
          href="https://campswingitkr-git-csi2025-hyunho-nohs-projects.vercel.app"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-900">2025 Website</h3>
          <p className="mt-2 text-gray-600">Visit SwingIt Camp 2025 Website</p>
        </Link>
        
        <Link
          href="https://campswingitkr-git-csi2024-hyunho-nohs-projects.vercel.app"
          className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <h3 className="text-xl font-semibold text-gray-900">2024 Website</h3>
          <p className="mt-2 text-gray-600">Visit SwingIt Camp 2024 Website</p>
        </Link>
      </div>
    </SimpleLayout>
  );
}
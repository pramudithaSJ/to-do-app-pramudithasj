import Image from 'next/image'
import Sidebar from './common/sidebar'
import { useRouter } from 'next/navigation';
import Dashboard from './dashboard/page';

export default function Home() {

  return (
    <main className="flex min-h-screen w-full">
      <div
        className={`lg:w-1/5 `}>
        <Sidebar />
      </div>
    </main>
  )
}

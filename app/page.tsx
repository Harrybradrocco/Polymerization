import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { PolymerExplanation } from '@/components/polymer-explanation'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">Exploring Polymers</h1>
        <p className="text-xl text-center mb-12">
          Discover the fascinating world of polymers, their classification, and properties
        </p>
        <PolymerExplanation />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Link href="/types">
            <Button className="w-full h-32 text-xl">Polymer Types</Button>
          </Link>
          <Link href="/formation">
            <Button className="w-full h-32 text-xl">Polymer Formation</Button>
          </Link>
          <Link href="/crystallinity">
            <Button className="w-full h-32 text-xl">Crystallinity vs. Amorphous</Button>
          </Link>
          <Link href="/hardness">
            <Button className="w-full h-32 text-xl">Effect on Hardness</Button>
          </Link>
          <Link href="/fiber-reinforced-composites">
            <Button className="w-full h-32 text-xl">Fiber Reinforced Composites</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}


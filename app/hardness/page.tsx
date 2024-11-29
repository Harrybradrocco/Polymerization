"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Slider } from "@/components/ui/slider"

const PolymerChain = ({ crystallinity }) => (
  <motion.div
    className="w-full h-8 bg-blue-500 rounded-full"
    style={{
      clipPath: `polygon(0% 0%, ${crystallinity}% 0%, ${crystallinity}% 100%, 0% 100%)`,
    }}
  />
)

const Ball = ({ crystallinity }) => (
  <motion.div
    className="w-16 h-16 bg-red-500 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2"
    animate={{ y: [0, -100 * (crystallinity / 100), 0] }}
    transition={{ duration: 1, repeat: Infinity }}
  />
)

export default function Hardness() {
  const [crystallinity, setCrystallinity] = useState(50)

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Effect on Hardness</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            The degree of crystallinity in a polymer affects its hardness. Higher crystallinity generally results in harder, more rigid polymers.
          </p>
          <p className="mb-4">
            Use the slider below to adjust the crystallinity and observe its effect on the polymer's hardness.
          </p>
          <Slider
            value={[crystallinity]}
            onValueChange={(value) => setCrystallinity(value[0])}
            max={100}
            step={1}
            className="mb-4"
          />
          <p>Crystallinity: {crystallinity}%</p>
        </div>
        <div className="relative h-[400px] border border-gray-300 rounded-lg">
          <PolymerChain crystallinity={crystallinity} />
          <Ball crystallinity={crystallinity} />
        </div>
      </div>
    </div>
  )
}


"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Particle = ({ x, y, isOrdered }) => (
  <motion.div
    className={`w-4 h-4 rounded-full ${isOrdered ? 'bg-blue-500' : 'bg-red-500'}`}
    style={{ position: 'absolute', left: x, top: y }}
    animate={{ x: isOrdered ? 0 : Math.random() * 10 - 5, y: isOrdered ? 0 : Math.random() * 10 - 5 }}
    transition={{ duration: 0.5, repeat: isOrdered ? 0 : Infinity, repeatType: 'reverse' }}
  />
)

export default function Crystallinity() {
  const [isOrdered, setIsOrdered] = useState(true)

  const particles = Array.from({ length: 100 }, (_, i) => ({
    x: (i % 10) * 40 + 20,
    y: Math.floor(i / 10) * 40 + 20,
  }))

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Crystallinity vs. Amorphous</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Polymers can exist in crystalline (ordered) or amorphous (disordered) states. The degree of crystallinity affects the polymer's properties, including hardness.
          </p>
          <p className="mb-4">
            Click the button below to toggle between crystalline and amorphous states.
          </p>
          <Button onClick={() => setIsOrdered((prev) => !prev)}>
            {isOrdered ? 'Show Amorphous' : 'Show Crystalline'}
          </Button>
        </div>
        <div className="relative h-[400px] border border-gray-300 rounded-lg">
          {particles.map((particle, index) => (
            <Particle key={index} x={particle.x} y={particle.y} isOrdered={isOrdered} />
          ))}
        </div>
      </div>
    </div>
  )
}


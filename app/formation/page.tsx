"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Monomer = ({ x, y }) => (
  <motion.div
    className="w-8 h-8 rounded-full bg-blue-500"
    style={{ position: 'absolute', left: x, top: y }}
  />
)

const Polymer = ({ start, end }) => (
  <motion.div
    className="h-2 bg-red-500"
    style={{
      position: 'absolute',
      left: start.x + 16,
      top: start.y + 14,
      width: end.x - start.x,
      transformOrigin: 'left center',
    }}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.5 }}
  />
)

export default function PolymerFormation() {
  const [step, setStep] = useState(0)
  const monomers = [
    { x: 50, y: 100 },
    { x: 150, y: 100 },
    { x: 250, y: 100 },
    { x: 350, y: 100 },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Polymer Formation</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Polymers are formed through a process called polymerization, where many small molecules (monomers) join together to form long chains.
          </p>
          <p className="mb-4">
            Click the button below to see the step-by-step process of polymer formation.
          </p>
          <Button onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : 0))}>
            {step === 0 ? 'Start Polymerization' : 'Next Step'}
          </Button>
        </div>
        <div className="relative h-[300px] border border-gray-300 rounded-lg">
          {monomers.map((monomer, index) => (
            <Monomer key={index} x={monomer.x} y={monomer.y} />
          ))}
          {step >= 1 && <Polymer start={monomers[0]} end={monomers[1]} />}
          {step >= 2 && <Polymer start={monomers[1]} end={monomers[2]} />}
          {step >= 3 && <Polymer start={monomers[2]} end={monomers[3]} />}
        </div>
      </div>
    </div>
  )
}


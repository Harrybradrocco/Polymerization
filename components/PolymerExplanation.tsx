"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const Monomer = ({ x, y, color }) => (
  <motion.div
    className={`w-8 h-8 rounded-full ${color} absolute`}
    style={{ left: x, top: y }}
    whileHover={{ scale: 1.2 }}
  />
)

const Bond = ({ start, end }) => (
  <motion.div
    className="h-1 bg-gray-600 absolute"
    style={{
      width: Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)),
      left: start.x,
      top: start.y,
      transformOrigin: 'left center',
      rotate: Math.atan2(end.y - start.y, end.x - start.x) * (180 / Math.PI),
    }}
    initial={{ scaleX: 0 }}
    animate={{ scaleX: 1 }}
    transition={{ duration: 0.5 }}
  />
)

export const PolymerExplanation: React.FC = () => {
  const [polymerized, setPolymerized] = useState(false)
  const monomers = [
    { x: 20, y: 50, color: 'bg-red-500' },
    { x: 100, y: 50, color: 'bg-blue-500' },
    { x: 180, y: 50, color: 'bg-green-500' },
    { x: 260, y: 50, color: 'bg-yellow-500' },
  ]

  const polymerPositions = [
    { x: 20, y: 50 },
    { x: 80, y: 80 },
    { x: 140, y: 20 },
    { x: 200, y: 50 },
  ]

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">What is a Polymer?</h2>
      <p className="mb-4">
        A polymer is a large molecule composed of many repeated subunits, called monomers. 
        These monomers are joined together by chemical bonds to form a long chain.
      </p>
      <div className="relative h-40 border border-gray-300 rounded-lg mb-4">
        {polymerized ? (
          <>
            {polymerPositions.map((pos, index) => (
              <Monomer key={index} x={pos.x} y={pos.y} color={monomers[index].color} />
            ))}
            {polymerPositions.slice(0, -1).map((start, index) => (
              <Bond key={index} start={start} end={polymerPositions[index + 1]} />
            ))}
          </>
        ) : (
          monomers.map((monomer, index) => (
            <Monomer key={index} x={monomer.x} y={monomer.y} color={monomer.color} />
          ))
        )}
      </div>
      <Button onClick={() => setPolymerized(!polymerized)}>
        {polymerized ? 'Show Monomers' : 'Polymerize'}
      </Button>
      <p className="mt-4">
        {polymerized
          ? "This is a polymer! Notice how the monomers are linked together in a chain."
          : "These are individual monomers. Click 'Polymerize' to see how they join to form a polymer."}
      </p>
    </div>
  )
}


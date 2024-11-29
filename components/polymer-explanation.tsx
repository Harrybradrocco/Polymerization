"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const Monomer = ({ x, y, color, label }) => (
  <motion.div
    className={`w-12 h-12 rounded-full ${color} absolute flex items-center justify-center text-white font-bold`}
    style={{ left: x, top: y }}
    whileHover={{ scale: 1.2 }}
  >
    {label}
  </motion.div>
)

const Bond = ({ start, end, color = "bg-gray-600" }) => (
  <motion.div
    className={`h-1 ${color} absolute`}
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

const AdditionPolymerization = () => {
  const [polymerized, setPolymerized] = useState(false)
  const monomers = [
    { x: 20, y: 50, color: 'bg-blue-500', label: 'C=C' },
    { x: 100, y: 50, color: 'bg-blue-500', label: 'C=C' },
    { x: 180, y: 50, color: 'bg-blue-500', label: 'C=C' },
    { x: 260, y: 50, color: 'bg-blue-500', label: 'C=C' },
  ]

  const polymerPositions = [
    { x: 20, y: 50, label: 'C-C' },
    { x: 80, y: 50, label: 'C-C' },
    { x: 140, y: 50, label: 'C-C' },
    { x: 200, y: 50, label: 'C-C' },
  ]

  return (
    <div>
      <p className="mb-4">
        Addition polymerization involves the joining of monomers with double bonds, typically vinyl monomers.
      </p>
      <div className="relative h-40 border border-gray-300 rounded-lg mb-4">
        {polymerized ? (
          <>
            {polymerPositions.map((pos, index) => (
              <Monomer key={index} x={pos.x} y={pos.y} color="bg-green-500" label={pos.label} />
            ))}
            {polymerPositions.slice(0, -1).map((start, index) => (
              <Bond key={index} start={start} end={polymerPositions[index + 1]} color="bg-green-700" />
            ))}
          </>
        ) : (
          monomers.map((monomer, index) => (
            <Monomer key={index} x={monomer.x} y={monomer.y} color={monomer.color} label={monomer.label} />
          ))
        )}
      </div>
      <Button onClick={() => setPolymerized(!polymerized)}>
        {polymerized ? 'Show Monomers' : 'Polymerize'}
      </Button>
      <p className="mt-4">
        {polymerized
          ? "The double bonds have opened up and linked the monomers into a polymer chain."
          : "These are vinyl monomers with carbon-carbon double bonds. Click 'Polymerize' to see how they join."}
      </p>
    </div>
  )
}

const CondensationPolymerization = () => {
  const [polymerized, setPolymerized] = useState(false)
  const monomers = [
    { x: 20, y: 50, color: 'bg-red-500', label: 'A-B' },
    { x: 100, y: 50, color: 'bg-blue-500', label: 'A-B' },
    { x: 180, y: 50, color: 'bg-red-500', label: 'A-B' },
    { x: 260, y: 50, color: 'bg-blue-500', label: 'A-B' },
  ]

  const polymerPositions = [
    { x: 20, y: 50, color: 'bg-red-500', label: 'A' },
    { x: 80, y: 50, color: 'bg-purple-500', label: 'B-A' },
    { x: 140, y: 50, color: 'bg-purple-500', label: 'B-A' },
    { x: 200, y: 50, color: 'bg-blue-500', label: 'B' },
  ]

  const [byproducts, setByproducts] = useState([])

  const handlePolymerize = () => {
    setPolymerized(true)
    setByproducts([
      { x: 60, y: 20, label: 'H2O' },
      { x: 120, y: 80, label: 'H2O' },
      { x: 180, y: 20, label: 'H2O' },
    ])
  }

  const handleReset = () => {
    setPolymerized(false)
    setByproducts([])
  }

  return (
    <div>
      <p className="mb-4">
        Condensation polymerization involves the reaction of two different functional groups, often releasing small molecules like water.
      </p>
      <div className="relative h-40 border border-gray-300 rounded-lg mb-4">
        {polymerized ? (
          <>
            {polymerPositions.map((pos, index) => (
              <Monomer key={index} x={pos.x} y={pos.y} color={pos.color} label={pos.label} />
            ))}
            {polymerPositions.slice(0, -1).map((start, index) => (
              <Bond key={index} start={start} end={polymerPositions[index + 1]} color="bg-purple-700" />
            ))}
            {byproducts.map((byproduct, index) => (
              <motion.div
                key={index}
                className="absolute bg-yellow-300 rounded-full w-8 h-8 flex items-center justify-center text-xs"
                style={{ left: byproduct.x, top: byproduct.y }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                {byproduct.label}
              </motion.div>
            ))}
          </>
        ) : (
          monomers.map((monomer, index) => (
            <Monomer key={index} x={monomer.x} y={monomer.y} color={monomer.color} label={monomer.label} />
          ))
        )}
      </div>
      <Button onClick={polymerized ? handleReset : handlePolymerize}>
        {polymerized ? 'Reset' : 'Polymerize'}
      </Button>
      <p className="mt-4">
        {polymerized
          ? "The monomers have joined, releasing water molecules as byproducts."
          : "These are bifunctional monomers. Click 'Polymerize' to see how they join and release byproducts."}
      </p>
    </div>
  )
}

export const PolymerExplanation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h2 className="text-2xl font-bold mb-4">What is a Polymer?</h2>
      <p className="mb-4">
        A polymer is a large molecule composed of many repeated subunits, called monomers. 
        These monomers are joined together by chemical bonds to form a long chain.
      </p>
      <Tabs defaultValue="addition" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="addition">Addition Polymerization</TabsTrigger>
          <TabsTrigger value="condensation">Condensation Polymerization</TabsTrigger>
        </TabsList>
        <TabsContent value="addition">
          <AdditionPolymerization />
        </TabsContent>
        <TabsContent value="condensation">
          <CondensationPolymerization />
        </TabsContent>
      </Tabs>
    </div>
  )
}


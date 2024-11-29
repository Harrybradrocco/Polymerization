"use client"

import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"

const PolymerChain = ({ type }) => {
  const colors = {
    linear: '#ff0000',
    branched: '#00ff00',
    crosslinked: '#0000ff',
  }

  return (
    <group>
      {type === 'linear' && (
        <mesh>
          <cylinderGeometry args={[0.1, 0.1, 5, 32]} />
          <meshStandardMaterial color={colors[type]} />
        </mesh>
      )}
      {type === 'branched' && (
        <group>
          <mesh>
            <cylinderGeometry args={[0.1, 0.1, 5, 32]} />
            <meshStandardMaterial color={colors[type]} />
          </mesh>
          <mesh position={[0, 1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
            <meshStandardMaterial color={colors[type]} />
          </mesh>
          <mesh position={[0, -1, 0]} rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 2, 32]} />
            <meshStandardMaterial color={colors[type]} />
          </mesh>
        </group>
      )}
      {type === 'crosslinked' && (
        <group>
          <mesh>
            <cylinderGeometry args={[0.1, 0.1, 5, 32]} />
            <meshStandardMaterial color={colors[type]} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 5, 32]} />
            <meshStandardMaterial color={colors[type]} />
          </mesh>
          <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.1, 0.1, 5, 32]} />
            <meshStandardMaterial color={colors[type]} />
          </mesh>
        </group>
      )}
    </group>
  )
}

export default function PolymerTypes() {
  const [polymerType, setPolymerType] = useState('linear')

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Polymer Types</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <p className="mb-4">
            Polymers can be classified into three main types based on their molecular structure:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Linear polymers</li>
            <li>Branched polymers</li>
            <li>Crosslinked polymers</li>
          </ul>
          <p className="mb-4">
            Click on the buttons below to see an interactive 3D representation of each polymer type.
          </p>
          <div className="flex space-x-4">
            <Button onClick={() => setPolymerType('linear')}>Linear</Button>
            <Button onClick={() => setPolymerType('branched')}>Branched</Button>
            <Button onClick={() => setPolymerType('crosslinked')}>Crosslinked</Button>
          </div>
        </div>
        <motion.div
          key={polymerType}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="h-[400px]"
        >
          <Canvas camera={{ position: [0, 0, 10] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <PolymerChain type={polymerType} />
            <OrbitControls />
          </Canvas>
        </motion.div>
      </div>
    </div>
  )
}


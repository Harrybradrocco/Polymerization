"use client"

import { useEffect, useRef } from 'react'

export function StressDistribution() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw coordinate system
    ctx.beginPath()
    ctx.moveTo(50, canvas.height - 50)
    ctx.lineTo(canvas.width - 50, canvas.height - 50)
    ctx.moveTo(50, canvas.height - 50)
    ctx.lineTo(50, 50)
    ctx.stroke()

    // Draw stress distribution
    ctx.beginPath()
    ctx.moveTo(50, canvas.height - 50)
    ctx.lineTo(canvas.width/2, 50)
    ctx.lineTo(canvas.width - 50, canvas.height - 50)
    ctx.strokeStyle = 'red'
    ctx.stroke()

    // Add labels
    ctx.fillStyle = 'black'
    ctx.font = '14px Arial'
    ctx.fillText('Position', canvas.width - 40, canvas.height - 30)
    ctx.save()
    ctx.translate(30, canvas.height/2)
    ctx.rotate(-Math.PI/2)
    ctx.fillText('Stress', 0, 0)
    ctx.restore()
  }, [])

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-2">Stress Distribution</h3>
      <canvas 
        ref={canvasRef}
        width={400}
        height={300}
        className="border border-gray-300 rounded-lg"
      />
    </div>
  )
}


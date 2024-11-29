"use client"

import { useState } from 'react'
import { Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

interface CompositeParams {
  fiberModulus: number;
  matrixModulus: number;
  fiberVolumeFraction: number;
  fiberStrength: number;
  matrixStrength: number;
  fiberDiameter: number;
  shearStress: number;
  fiberLength: number;
}

function calculateCompositeModulus(params: CompositeParams): number {
  const { fiberModulus, matrixModulus, fiberVolumeFraction } = params;
  return fiberModulus * fiberVolumeFraction + matrixModulus * (1 - fiberVolumeFraction);
}

function calculateCriticalLength(params: CompositeParams): number {
  const { fiberStrength, fiberDiameter, shearStress } = params;
  return (fiberStrength * fiberDiameter) / (2 * shearStress);
}

function calculateCompositeStrength(params: CompositeParams): number {
  const { fiberStrength, matrixStrength, fiberVolumeFraction, fiberLength } = params;
  const criticalLength = calculateCriticalLength(params);
  
  if (fiberLength < criticalLength) {
    return (fiberLength * fiberStrength * fiberVolumeFraction) / (2 * criticalLength) + 
           matrixStrength * (1 - fiberVolumeFraction);
  } else if (fiberLength > criticalLength && fiberLength < 15 * criticalLength) {
    return fiberStrength * fiberVolumeFraction * (1 - criticalLength/(2 * fiberLength)) + 
           matrixStrength * (1 - fiberVolumeFraction);
  } else {
    return fiberStrength * fiberVolumeFraction + matrixStrength * (1 - fiberVolumeFraction);
  }
}

export function CompositeCalculator() {
  const [params, setParams] = useState<CompositeParams>({
    fiberModulus: 230,
    matrixModulus: 3.4,
    fiberVolumeFraction: 0.6,
    fiberStrength: 3500,
    matrixStrength: 100,
    fiberDiameter: 0.007,
    shearStress: 70,
    fiberLength: 0.1
  })

  const [results, setResults] = useState({
    compositeModulus: 0,
    criticalLength: 0,
    compositeStrength: 0
  })

  const handleCalculate = () => {
    setResults({
      compositeModulus: calculateCompositeModulus(params),
      criticalLength: calculateCriticalLength(params),
      compositeStrength: calculateCompositeStrength(params)
    })
  }

  const handleInputChange = (key: keyof CompositeParams) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setParams(prev => ({ ...prev, [key]: parseFloat(e.target.value) }))
  }

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold mb-4">Fiber Reinforced Composite Calculator</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="fiberModulus">Fiber Modulus (GPa)</Label>
          <Input
            id="fiberModulus"
            type="number"
            value={params.fiberModulus}
            onChange={handleInputChange('fiberModulus')}
          />
        </div>
        <div>
          <Label htmlFor="matrixModulus">Matrix Modulus (GPa)</Label>
          <Input
            id="matrixModulus"
            type="number"
            value={params.matrixModulus}
            onChange={handleInputChange('matrixModulus')}
          />
        </div>
        <div>
          <Label htmlFor="fiberVolumeFraction">Fiber Volume Fraction</Label>
          <Input
            id="fiberVolumeFraction"
            type="number"
            min="0"
            max="1"
            step="0.1"
            value={params.fiberVolumeFraction}
            onChange={handleInputChange('fiberVolumeFraction')}
          />
        </div>
        <div>
          <Label htmlFor="fiberStrength">Fiber Strength (MPa)</Label>
          <Input
            id="fiberStrength"
            type="number"
            value={params.fiberStrength}
            onChange={handleInputChange('fiberStrength')}
          />
        </div>
        <div>
          <Label htmlFor="matrixStrength">Matrix Strength (MPa)</Label>
          <Input
            id="matrixStrength"
            type="number"
            value={params.matrixStrength}
            onChange={handleInputChange('matrixStrength')}
          />
        </div>
        <div>
          <Label htmlFor="fiberDiameter">Fiber Diameter (mm)</Label>
          <Input
            id="fiberDiameter"
            type="number"
            value={params.fiberDiameter}
            onChange={handleInputChange('fiberDiameter')}
          />
        </div>
        <div>
          <Label htmlFor="shearStress">Interface Shear Stress (MPa)</Label>
          <Input
            id="shearStress"
            type="number"
            value={params.shearStress}
            onChange={handleInputChange('shearStress')}
          />
        </div>
        <div>
          <Label htmlFor="fiberLength">Fiber Length (mm)</Label>
          <Input
            id="fiberLength"
            type="number"
            value={params.fiberLength}
            onChange={handleInputChange('fiberLength')}
          />
        </div>
      </div>
      <Button onClick={handleCalculate} className="w-full mb-4">Calculate</Button>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Composite Modulus</h3>
          <p className="text-2xl">{results.compositeModulus.toFixed(2)} GPa</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Critical Length</h3>
          <p className="text-2xl">{results.criticalLength.toFixed(2)} mm</p>
        </Card>
        <Card className="p-4">
          <h3 className="font-semibold mb-2">Composite Strength</h3>
          <p className="text-2xl">{results.compositeStrength.toFixed(2)} MPa</p>
        </Card>
      </div>
    </Card>
  )
}


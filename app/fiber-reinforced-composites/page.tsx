import { CompositeCalculator } from '@/components/composite-calculator'
import { StressDistribution } from '@/components/stress-distribution'
import { Card } from "@/components/ui/card"

export default function FiberReinforcedCompositesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Fiber Reinforced Composites</h1>
      <p className="mb-6">
        Fiber reinforced composites combine high-strength fibers with a matrix material to create
        materials with exceptional properties. Use the calculator below to explore how different
        parameters affect the composite's properties.
      </p>

      <Card className="p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">Variables and Formulae</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Variables</h3>
            <ul className="list-disc list-inside">
              <li>E<sub>f</sub>: Fiber modulus</li>
              <li>E<sub>m</sub>: Matrix modulus</li>
              <li>v<sub>f</sub>: Fiber volume fraction</li>
              <li>σ<sub>f</sub>: Fiber strength</li>
              <li>σ<sub>m</sub>: Matrix strength</li>
              <li>d: Fiber diameter</li>
              <li>τ: Interface shear stress</li>
              <li>l: Fiber length</li>
              <li>l<sub>c</sub>: Critical fiber length</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Formulae</h3>
            <p className="mb-2">Composite Modulus:</p>
            <p className="mb-4">E = E<sub>f</sub>v<sub>f</sub> + E<sub>m</sub>(1 - v<sub>f</sub>)</p>
            <p className="mb-2">Critical Length:</p>
            <p className="mb-4">l<sub>c</sub> = (σ<sub>f</sub>d) / (2τ)</p>
            <p className="mb-2">Composite Strength:</p>
            <p>For l &lt; l<sub>c</sub>:</p>
            <p className="mb-4">σ<sub>c</sub> = (lσ<sub>f</sub>v<sub>f</sub>) / (2l<sub>c</sub>) + σ<sub>m</sub>(1 - v<sub>f</sub>)</p>
            <p>For l<sub>c</sub> &lt; l &lt; 15l<sub>c</sub>:</p>
            <p className="mb-4">σ<sub>c</sub> = σ<sub>f</sub>v<sub>f</sub>(1 - l<sub>c</sub>/(2l)) + σ<sub>m</sub>(1 - v<sub>f</sub>)</p>
            <p>For l &gt; 15l<sub>c</sub>:</p>
            <p>σ<sub>c</sub> = σ<sub>f</sub>v<sub>f</sub> + σ<sub>m</sub>(1 - v<sub>f</sub>)</p>
          </div>
        </div>
      </Card>

      <CompositeCalculator />
      <StressDistribution />
    </div>
  )
}


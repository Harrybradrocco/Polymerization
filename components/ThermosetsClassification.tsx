import { TreeNode } from './TreeNode'

export const ThermosetsClassification: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow mt-8">
      <h2 className="text-2xl font-bold mb-4">Classification of Thermosets</h2>
      <TreeNode label="Thermosets">
        <TreeNode label="Phenolic Resins">
          <TreeNode label="Phenol-formaldehyde (PF)">
            <p className="text-sm text-gray-600 mt-1">
              Example: Bakelite used in electrical insulators
            </p>
          </TreeNode>
          <TreeNode label="Urea-formaldehyde (UF)">
            <p className="text-sm text-gray-600 mt-1">
              Example: Adhesives for particleboard
            </p>
          </TreeNode>
          <TreeNode label="Melamine-formaldehyde (MF)">
            <p className="text-sm text-gray-600 mt-1">
              Example: Laminate countertops, dinnerware
            </p>
          </TreeNode>
        </TreeNode>
        <TreeNode label="Epoxy Resins">
          <p className="text-sm text-gray-600 mt-1">
            Example: Adhesives, protective coatings, composite materials
          </p>
        </TreeNode>
        <TreeNode label="Unsaturated Polyesters">
          <TreeNode label="Orthophthalic polyesters">
            <p className="text-sm text-gray-600 mt-1">
              Example: Fiberglass reinforced plastics for boat hulls
            </p>
          </TreeNode>
          <TreeNode label="Isophthalic polyesters">
            <p className="text-sm text-gray-600 mt-1">
              Example: Corrosion-resistant tanks and pipes
            </p>
          </TreeNode>
        </TreeNode>
        <TreeNode label="Polyurethanes (PU)">
          <TreeNode label="Flexible foams">
            <p className="text-sm text-gray-600 mt-1">
              Example: Mattresses, car seats
            </p>
          </TreeNode>
          <TreeNode label="Rigid foams">
            <p className="text-sm text-gray-600 mt-1">
              Example: Insulation panels, refrigerator insulation
            </p>
          </TreeNode>
          <TreeNode label="Elastomers">
            <p className="text-sm text-gray-600 mt-1">
              Example: Shoe soles, industrial rollers
            </p>
          </TreeNode>
        </TreeNode>
        <TreeNode label="Silicones">
          <p className="text-sm text-gray-600 mt-1">
            Example: Sealants, medical implants, cookware
          </p>
        </TreeNode>
      </TreeNode>
    </div>
  )
}


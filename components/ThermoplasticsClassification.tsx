import { TreeNode } from './TreeNode'

export const ThermoplasticsClassification: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow mb-8">
      <h2 className="text-2xl font-bold mb-4">Classification of Thermoplastics</h2>
      <TreeNode label="Thermoplastics">
        <TreeNode label="Amorphous">
          <TreeNode label="Multiphase">
            <TreeNode label="Block Copolymers (SBS - thermoplastic elastomers)">
              <p className="text-sm text-gray-600 mt-1">
                Example: Shoe soles, adhesives, asphalt modifiers
              </p>
            </TreeNode>
            <TreeNode label="Graft Copolymers">
              <p className="text-sm text-gray-600 mt-1">
                Example: Impact-resistant polystyrene (HIPS)
              </p>
            </TreeNode>
            <TreeNode label="SB (Styrene-Butadiene)">
              <p className="text-sm text-gray-600 mt-1">
                Example: Tire treads, footwear
              </p>
            </TreeNode>
            <TreeNode label="ABS (Acrylonitrile Butadiene Styrene)">
              <p className="text-sm text-gray-600 mt-1">
                Example: Lego bricks, computer keyboards
              </p>
            </TreeNode>
            <TreeNode label="Polymer Blends">
              <p className="text-sm text-gray-600 mt-1">
                Example: PC/ABS blends used in automotive parts
              </p>
            </TreeNode>
          </TreeNode>
          <TreeNode label="Single-phase">
            <TreeNode label="Homopolymers (PMMA, PS, PVC, PC, PET, PBT, PU, linear)">
              <p className="text-sm text-gray-600 mt-1">
                Examples: PMMA (acrylic glass), PS (disposable cutlery), PVC (pipes)
              </p>
            </TreeNode>
            <TreeNode label="Statistical Copolymers">
              <TreeNode label="SAN (Styrene-Acrylonitrile)">
                <p className="text-sm text-gray-600 mt-1">
                  Example: Kitchenware, computer products
                </p>
              </TreeNode>
              <TreeNode label="EVAC (Ethylene-Vinyl Acetate)">
                <p className="text-sm text-gray-600 mt-1">
                  Example: Flexible packaging, hot melt adhesives
                </p>
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode label="Semi-crystalline">
          <TreeNode label="Multiphase">
            <TreeNode label="C-C Polymers: Polyolefins">
              <TreeNode label="PE (Polyethylene)">
                <p className="text-sm text-gray-600 mt-1">
                  Example: Plastic bags, bottles
                </p>
              </TreeNode>
              <TreeNode label="PP (Polypropylene)">
                <p className="text-sm text-gray-600 mt-1">
                  Example: Food containers, car parts
                </p>
              </TreeNode>
            </TreeNode>
            <TreeNode label="Fluorine-containing Polymers">
              <p className="text-sm text-gray-600 mt-1">
                Example: PTFE (Teflon) used in non-stick cookware
              </p>
            </TreeNode>
            <TreeNode label="Heteropolymers">
              <TreeNode label="Polymers with heteroatoms (e.g., O, N,...) in the main chain">
                <TreeNode label="PA (Polyamide)">
                  <p className="text-sm text-gray-600 mt-1">
                    Example: Nylon fibers, gears
                  </p>
                </TreeNode>
                <TreeNode label="POM (Polyoxymethylene)">
                  <p className="text-sm text-gray-600 mt-1">
                    Example: Precision parts, zippers
                  </p>
                </TreeNode>
                <TreeNode label="PI (Polyimide)">
                  <p className="text-sm text-gray-600 mt-1">
                    Example: Flexible printed circuits, aerospace components
                  </p>
                </TreeNode>
              </TreeNode>
              <TreeNode label="PET (Polyethylene Terephthalate)">
                <p className="text-sm text-gray-600 mt-1">
                  Example: Beverage bottles, polyester fibers
                </p>
              </TreeNode>
              <TreeNode label="PBT (Polybutylene Terephthalate)">
                <p className="text-sm text-gray-600 mt-1">
                  Example: Electrical connectors, automotive parts
                </p>
              </TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
      </TreeNode>
    </div>
  )
}


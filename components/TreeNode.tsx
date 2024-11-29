import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface TreeNodeProps {
  label: string
  children?: React.ReactNode
}

export const TreeNode: React.FC<TreeNodeProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="ml-4">
      <div 
        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {children ? (
          isOpen ? <ChevronDown className="w-4 h-4 mr-2" /> : <ChevronRight className="w-4 h-4 mr-2" />
        ) : (
          <div className="w-4 h-4 mr-2" />
        )}
        <span>{label}</span>
      </div>
      {isOpen && children && <div className="ml-4">{children}</div>}
    </div>
  )
}


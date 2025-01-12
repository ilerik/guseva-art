import React from 'react'

interface GridProps {
  children: React.ReactNode
  columns: {
    initial: string
    sm?: string
    md?: string
    lg?: string
    xl?: string
  }
  gapX?: number
  gapY?: number
}

export function Grid({ children, columns, gapX = 4, gapY = 4 }: GridProps) {
  const columnClasses = `grid grid-cols-${columns.initial} ${columns.sm ? `sm:grid-cols-${columns.sm}` : ''} ${columns.md ? `md:grid-cols-${columns.md}` : ''} ${columns.lg ? `lg:grid-cols-${columns.lg}` : ''} ${columns.xl ? `xl:grid-cols-${columns.xl}` : ''}`
  const gapClasses = `gap-x-${gapX} gap-y-${gapY}`

  return (
    <div className={`${columnClasses} ${gapClasses}`}>
      {children}
    </div>
  )
}


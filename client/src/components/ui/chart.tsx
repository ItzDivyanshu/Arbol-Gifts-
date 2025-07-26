"use client"

import * as React from "react"
import * as Recharts from "recharts"
import { cn } from "@/lib/utils"

type ChartConfig = {
  [key: string]: {
    label?: string
    color?: string
  }
}

interface ChartContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  config: ChartConfig
  children: React.ReactNode
}

const ChartContainer = React.forwardRef<HTMLDivElement, ChartContainerProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("aspect-video w-full", className)}
        {...props}
      >
        <Recharts.ResponsiveContainer width="100%" height="100%">
          {children}
        </Recharts.ResponsiveContainer>
      </div>
    )
  }
)
ChartContainer.displayName = "ChartContainer"

interface ChartTooltipContentProps {
  active?: boolean
  payload?: Array<{
    name: string
    value: number
    payload: any
    color: string
  }>
  label?: string | number
}

const ChartTooltipContent: React.FC<ChartTooltipContentProps> = ({
  active,
  payload,
  label,
}) => {
  if (!active || !payload?.length) return null

  return (
    <div className="rounded-lg border bg-background p-4 text-sm shadow-sm">
      {label && <p className="font-medium">{label}</p>}
      <div className="mt-2 space-y-1">
        {payload.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ChartLegendProps {
  payload?: Array<{ value: string; color: string }>
}

const ChartLegend: React.FC<ChartLegendProps> = ({ payload }) => {
  if (!payload?.length) return null

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
      {payload.map((entry, index) => (
        <div key={`item-${index}`} className="flex items-center gap-2">
          <div
            className="h-2 w-2 rounded-full"
            style={{ backgroundColor: entry.color }}
          />
          <span className="text-xs text-muted-foreground">{entry.value}</span>
        </div>
      ))}
    </div>
  )
}

// Re-export Recharts components
export const {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Sector,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} = Recharts

export {
  ChartContainer,
  ChartTooltipContent,
  ChartLegend,
}

export type { ChartConfig }

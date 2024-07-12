"use client"
import { Bar, BarChart, LabelList, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"
import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
  { month: "Input data", total: 186 },
  { month: "Home cleaner", total: 305 },
  { month: "Gardener", total: 237 },
  { month: "Office boy", total: 73 },
  { month: "null", total: 209 },
  { month: "null", total: 214 },
]

const chartConfig = {
  total: {
    label: "Total recruits",
    color: "black",
  }
} satisfies ChartConfig

export default function Component() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart data={chartData} width={600} height={300}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="total" fill="var(--color-desktop)">
          <LabelList dataKey="total" position="top" />
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}

import { AgCharts } from "ag-charts-react"

function FinancialOverviewChart({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const total = income + expenses

  const incomePercentage = total
    ? ((income / total) * 100).toFixed(1)
    : 0

  const expensesPercentage = total
    ? ((expenses / total) * 100).toFixed(1)
    : 0

  const data = [
    { asset: "Income", amount: income },
    { asset: "Expenses", amount: expenses },
  ]

  const options = {
    autoSize: true,
    data,
    series: [
      {
        type: "donut",
        angleKey: "amount",
        legendItemKey: "asset",
        innerRadiusRatio: 0.68,
        fills: ["#4f46e5", "#ef4444"],
        strokes: ["#4f46e5", "#ef4444"],
        sectorSpacing: 4,
        innerLabels: [
          {
            text: `${incomePercentage}%`,
            fontSize: 24,
            fontWeight: "bold",
            color: "#111827",
          },
          {
            text: "Income Share",
            fontSize: 13,
            color: "#6b7280",
          },
        ],
      },
    ],
    legend: {
      enabled: false,
    },
    background: {
      visible: false,
    },
    padding: {
      top: 10,
      right: 20,
      bottom: 10,
      left: 20,
    },
    height: 320,
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="w-full max-w-[360px]">
        <AgCharts options={options} />
      </div>

      <div className="mt-4 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-indigo-600"></span>
          <span className="text-gray-700 font-medium">
            Income {incomePercentage}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-red-500"></span>
          <span className="text-gray-700 font-medium">
            Expenses {expensesPercentage}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default FinancialOverviewChart
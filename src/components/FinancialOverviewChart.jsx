import { AgCharts } from "ag-charts-react"

function FinancialOverviewChart({ transactions, darkMode }) {
  /*
    Graficul este o îmbunătățire extra față de minimul cerut în ghid.
    El transformă lista de tranzacții într-un rezumat vizual income vs expenses,
    astfel încât aplicația să arate ca un dashboard complet, nu doar ca o listă CRUD.
    Datele sunt calculate direct din store, iar culorile/textul se adaptează după tema activă.
  */
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

  const centerMainTextColor = darkMode ? "#f9fafb" : "#111827"
  const centerSubTextColor = darkMode ? "#d1d5db" : "#6b7280"
  const legendTextClass = darkMode ? "text-gray-200" : "text-gray-700"

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
            color: centerMainTextColor,
          },
          {
            text: "Income Share",
            fontSize: 13,
            color: centerSubTextColor,
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
      <div className="w-full max-w-[280px] sm:max-w-[360px]">
        <AgCharts options={options} />
      </div>

      <div className="mt-4 flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-indigo-600"></span>
          <span className={`${legendTextClass} font-medium`}>
            Income {incomePercentage}%
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-sm bg-red-500"></span>
          <span className={`${legendTextClass} font-medium`}>
            Expenses {expensesPercentage}%
          </span>
        </div>
      </div>
    </div>
  )
}

export default FinancialOverviewChart

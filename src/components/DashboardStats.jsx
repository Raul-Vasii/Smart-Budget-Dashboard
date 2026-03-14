function DashboardStats({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = income - expenses

  return (
    <section className="grid md:grid-cols-3 gap-6">
      
      {/* Income */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-xs text-gray-500 mb-2">TOTAL INCOME</p>
        <h2 className="text-xl font-bold text-green-600">
          ${income}
        </h2>
      </div>

      {/* Expenses */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-xs text-gray-500 mb-2">TOTAL EXPENSES</p>
        <h2 className="text-xl font-bold text-red-500">
          ${expenses}
        </h2>
      </div>

      {/* Balance */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <p className="text-xs text-gray-500 mb-2">BALANCE</p>
        <h2 className="text-xl font-bold text-gray-800">
          ${balance}
        </h2>
      </div>

    </section>
  )
}

export default DashboardStats
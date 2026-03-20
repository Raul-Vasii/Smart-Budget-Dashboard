import { formatCurrency } from "../utils/formatters"

function DashboardStats({ transactions }) {
  /*
    Această componentă este partea de dashboard adăugată peste CRUD-ul minim din ghid.
    Ea calculează total income, total expenses și balance din lista de tranzacții,
    ca să ofere o privire rapidă asupra datelor și un UI mai apropiat de un produs real.
  */
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0)

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = income - expenses

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      
      {/* Income */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 transition-colors duration-300">
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">TOTAL INCOME</p>
        <h2 className="text-xl font-bold text-green-600">
          {formatCurrency(income)}
        </h2>
      </div>

      {/* Expenses */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 transition-colors duration-300">
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">TOTAL EXPENSES</p>
        <h2 className="text-xl font-bold text-red-500">
          {formatCurrency(expenses)}
        </h2>
      </div>

      {/* Balance */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 transition-colors duration-300">
        <p className="text-xs text-gray-500 dark:text-gray-300 mb-2">BALANCE</p>
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          {formatCurrency(balance)}
        </h2>
      </div>

    </section>
  )
}

export default DashboardStats

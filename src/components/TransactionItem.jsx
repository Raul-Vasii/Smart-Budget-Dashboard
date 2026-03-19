import { formatCurrency, formatDate } from "../utils/formatters";

function TransactionItem({
  transaction,
  openDeleteModal,
  startEditTransaction,
}) {
  const isIncome = transaction.type === "income";

  return (
    <>
      {/* Desktop row */}
      <div className="hidden md:grid grid-cols-5 items-center px-4 py-3 border-t border-gray-200 dark:border-gray-700 text-sm transition-colors duration-300">
        <div className="font-medium text-gray-800 dark:text-white pr-3">
          {transaction.title}
        </div>

        <div className="pr-3">
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 font-medium transition-colors duration-300">
            {transaction.category}
          </span>
        </div>

        <div className="text-gray-500 dark:text-gray-300 pr-3">
          {formatDate(transaction.date)}
        </div>

        <div
          className={`font-semibold pr-3 ${
            isIncome ? "text-green-600" : "text-red-500"
          }`}
        >
          {isIncome ? "+" : "-"}
          {formatCurrency(transaction.amount)}
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => startEditTransaction(transaction)}
            className="px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25 transition font-medium shadow-sm"
          >
            Edit
          </button>

          <button
            onClick={() => openDeleteModal(transaction)}
            className="px-3 py-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-500/15 dark:text-red-300 dark:hover:bg-red-500/25 transition font-medium shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>

      {/* Mobile card */}
      <div className="md:hidden border-t border-gray-200 dark:border-gray-700 p-4 space-y-3 transition-colors duration-300">
        <div className="flex flex-col gap-2">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              Transaction
            </p>
            <p className="font-medium text-gray-800 dark:text-white">
              {transaction.title}
            </p>
          </div>

          <div
            className={`text-sm font-semibold ${isIncome ? "text-green-600" : "text-red-500"}`}
          >
            {isIncome ? "+" : "-"}
            {formatCurrency(transaction.amount)}
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs text-gray-500 dark:text-gray-300">Category</p>
            <span className="inline-block mt-1 px-3 py-1 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-200 font-medium transition-colors duration-300">
              {transaction.category}
            </span>
          </div>

          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-300">Date</p>
            <p className="text-sm text-gray-700 dark:text-gray-200">
              {formatDate(transaction.date)}
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-1">
          <button
            onClick={() => startEditTransaction(transaction)}
            className="px-3 py-1.5 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200 dark:bg-indigo-500/15 dark:text-indigo-300 dark:hover:bg-indigo-500/25 transition font-medium shadow-sm"
          >
            Edit
          </button>

          <button
            onClick={() => openDeleteModal(transaction)}
            className="px-3 py-1.5 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 dark:bg-red-500/15 dark:text-red-300 dark:hover:bg-red-500/25 transition font-medium shadow-sm"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TransactionItem;

import TransactionItem from "./TransactionItem";

function TransactionList({
  transactions,
  openDeleteModal,
  startEditTransaction,
}) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Recent Transactions
      </h2>

      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm overflow-hidden transition-colors duration-300">
        {transactions.length === 0 ? (
          <div className="p-8 text-center">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
              No transactions found
            </p>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              Try adding a new transaction or changing your filters.
            </p>
          </div>
        ) : (
          <>
            {/* Desktop table header */}
            <div className="hidden md:grid grid-cols-5 px-4 py-3 bg-gray-50 dark:bg-gray-900 text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase tracking-wide transition-colors duration-300">
              <span>Transaction</span>
              <span>Category</span>
              <span>Date</span>
              <span>Amount</span>
              <span>Actions</span>
            </div>

            {/* Rows */}
            {transactions.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                openDeleteModal={openDeleteModal}
                startEditTransaction={startEditTransaction}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default TransactionList;

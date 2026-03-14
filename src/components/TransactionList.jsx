import TransactionItem from "./TransactionItem"

function TransactionList({
  transactions,
  deleteTransaction,
  startEditTransaction,
}) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Transactions
      </h2>

      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        
        {/* Header */}
        <div className="grid grid-cols-5 px-4 py-3 bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wide">
          <span>Transaction</span>
          <span>Category</span>
          <span>Date</span>
          <span>Amount</span>
          <span>Actions</span>
        </div>

        {/* Rows */}
        {transactions.length === 0 ? (
          <p className="p-4 text-gray-500">No transactions yet.</p>
        ) : (
          transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              deleteTransaction={deleteTransaction}
              startEditTransaction={startEditTransaction}
            />
          ))
        )}
      </div>
    </section>
  )
}

export default TransactionList
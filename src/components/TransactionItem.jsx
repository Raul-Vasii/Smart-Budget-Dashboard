import { toast } from "react-toastify";

function TransactionItem({
  transaction,
  deleteTransaction,
  startEditTransaction,
}) {
  const isIncome = transaction.type === "income";

  return (
    <div className="grid grid-cols-5 items-center px-4 py-3 border-t text-sm">
      {/* Title */}
      <div className="font-medium text-gray-800">{transaction.title}</div>

      {/* Category */}
      <div>
        <span className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-600 font-medium">
          {transaction.category}
        </span>
      </div>

      {/* Date */}
      <div className="text-gray-500">{transaction.date}</div>

      {/* Amount */}
      <div
        className={`font-semibold ${
          isIncome ? "text-green-600" : "text-red-500"
        }`}
      >
        {isIncome ? "+" : "-"}${transaction.amount}
      </div>

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => startEditTransaction(transaction)}
          className="px-3 py-1 rounded-md bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
        >
          Edit
        </button>

        <button
          onClick={() => {
            deleteTransaction(transaction.id);
            toast.success("Transaction deleted");
          }}
          className="px-3 py-1 rounded-md bg-red-100 text-red-600 hover:bg-red-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TransactionItem;

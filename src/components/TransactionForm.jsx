import { useEffect, useState } from "react"
import { toast } from "react-toastify"

function TransactionForm({
  addTransaction,
  editingTransaction,
  updateTransaction,
}) {
  const [title, setTitle] = useState("")
  const [amount, setAmount] = useState("")
  const [type, setType] = useState("expense")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")

  useEffect(() => {
    if (editingTransaction) {
      setTitle(editingTransaction.title)
      setAmount(editingTransaction.amount)
      setType(editingTransaction.type)
      setCategory(editingTransaction.category)
      setDate(editingTransaction.date)
    }
  }, [editingTransaction])

  const resetForm = () => {
    setTitle("")
    setAmount("")
    setType("expense")
    setCategory("")
    setDate("")
  }

  const handleSubmit = (e) => {
  e.preventDefault()

  if (!title || !amount || !category || !date) {
    toast.error("Please fill in all fields")
    return
  }

  if (Number(amount) <= 0) {
    toast.error("Amount must be greater than 0")
    return
  }

  if (editingTransaction) {
    const updatedTransaction = {
      id: editingTransaction.id,
      title,
      amount: Number(amount),
      type,
      category,
      date,
    }

    updateTransaction(updatedTransaction)
    toast.success("Transaction updated successfully")
  } else {
    const newTransaction = {
      id: Date.now(),
      title,
      amount: Number(amount),
      type,
      category,
      date,
    }

    addTransaction(newTransaction)
    toast.success("Transaction added successfully")
  }

  resetForm()
}

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        {editingTransaction ? "Edit Transaction" : "Add Transaction"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Title</label>
          <input
            type="text"
            placeholder="e.g. Grocery Shopping"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Amount</label>
            <input
              type="number"
              placeholder="$ 0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Type</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Category</label>
          <input
            type="text"
            placeholder="e.g. Food, Work, Transport"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-indigo-600 text-white py-2.5 font-medium hover:bg-indigo-700 transition"
        >
          {editingTransaction ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>
    </div>
  )
}

export default TransactionForm
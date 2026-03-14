import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import { useTransactionsStore } from "./store/useTransactionsStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FinancialOverviewChart from "./components/FinancialOverviewChart";

function App() {
  const transactions = useTransactionsStore((state) => state.transactions);
  const deleteTransaction = useTransactionsStore(
    (state) => state.deleteTransaction,
  );
  const startEditTransaction = useTransactionsStore(
    (state) => state.startEditTransaction,
  );
  const editingTransaction = useTransactionsStore(
    (state) => state.editingTransaction,
  );
  const addTransaction = useTransactionsStore((state) => state.addTransaction);
  const updateTransaction = useTransactionsStore(
    (state) => state.updateTransaction,
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <DashboardStats transactions={transactions} />

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <TransactionForm
            addTransaction={addTransaction}
            editingTransaction={editingTransaction}
            updateTransaction={updateTransaction}
          />
          <div className="bg-white rounded-2xl shadow-sm p-6 min-h-[450px] flex flex-col">
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold text-gray-800">
                Financial Overview
              </h2>
              <p className="text-sm text-gray-500 mt-1">Income vs Expenses</p>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <FinancialOverviewChart transactions={transactions} />
            </div>
          </div>
        </div>

        <TransactionList
          transactions={transactions}
          deleteTransaction={deleteTransaction}
          startEditTransaction={startEditTransaction}
        />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;

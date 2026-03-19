import Header from "./components/Header";
import DashboardStats from "./components/DashboardStats";
import TransactionList from "./components/TransactionList";
import TransactionForm from "./components/TransactionForm";
import { useTransactionsStore } from "./store/useTransactionsStore";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FinancialOverviewChart from "./components/FinancialOverviewChart";
import { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import useDarkMode from "./hooks/useDarkMode";
import ScrollToTopButton from "./components/ScrollToTopButton";
import DeleteConfirmModal from "./components/DeleteConfirmModal";

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

  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [filterCategory, setFilterCategory] = useState("all");
  const resetFilters = () => {
    setSearchTerm("");
    setFilterType("all");
    setFilterCategory("all");
    setSortBy("newest");
  };

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [transactionToDelete, setTransactionToDelete] = useState(null);

  const openDeleteModal = (transaction) => {
    setTransactionToDelete(transaction);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setTransactionToDelete(null);
    setIsDeleteModalOpen(false);
  };

  const confirmDeleteTransaction = () => {
    if (!transactionToDelete) return;

    deleteTransaction(transactionToDelete.id);
    setTransactionToDelete(null);
    setIsDeleteModalOpen(false);
    toast.success("Transaction deleted");
  };

  const filteredTransactions = useMemo(() => {
    let result = [...transactions];

    result = result.filter((transaction) =>
      transaction.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    if (filterType !== "all") {
      result = result.filter((transaction) => transaction.type === filterType);
    }

    if (filterCategory !== "all") {
      result = result.filter(
        (transaction) => transaction.category === filterCategory,
      );
    }

    if (sortBy === "newest") {
      result.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortBy === "oldest") {
      result.sort((a, b) => new Date(a.date) - new Date(b.date));
    } else if (sortBy === "highest") {
      result.sort((a, b) => b.amount - a.amount);
    } else if (sortBy === "lowest") {
      result.sort((a, b) => a.amount - b.amount);
    }

    return result;
  }, [transactions, searchTerm, filterType, filterCategory, sortBy]);

  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <div className="max-w-6xl mx-auto px-4 py-6">
        <DashboardStats transactions={transactions} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <TransactionForm
            addTransaction={addTransaction}
            editingTransaction={editingTransaction}
            updateTransaction={updateTransaction}
          />
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-6 min-h-[450px] flex flex-col transition-colors duration-300">
            <div className="mb-4 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">
                Financial Overview
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                Income vs Expenses
              </p>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <FinancialOverviewChart
                transactions={transactions}
                darkMode={darkMode}
              />
            </div>
          </div>
        </div>

        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterType={filterType}
          setFilterType={setFilterType}
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
          resetFilters={resetFilters}
        />

        <TransactionList
          transactions={filteredTransactions}
          openDeleteModal={openDeleteModal}
          startEditTransaction={startEditTransaction}
        />
      </div>
      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={closeDeleteModal}
        onConfirm={confirmDeleteTransaction}
        title={transactionToDelete?.title || ""}
      />
      <ScrollToTopButton />
      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;

import { create } from "zustand"
import { persist } from "zustand/middleware"

const defaultTransactions = [
  {
    id: 1,
    title: "Salary",
    amount: 3500,
    type: "income",
    category: "Work",
    date: "2026-03-01",
  },
  {
    id: 2,
    title: "Groceries",
    amount: 200,
    type: "expense",
    category: "Food",
    date: "2026-03-03",
  },
]

export const useTransactionsStore = create(
  persist(
    (set) => ({
      /*
        Zustand bifează explicit una dintre cerințele avansate din ghid: state global management.
        Store-ul centralizează lista de tranzacții și tranzacția aflată în editare,
        iar metodele add/delete/update țin logica CRUD în afara componentelor pentru un cod mai curat.
      */
      transactions: defaultTransactions,
      editingTransaction: null,

      addTransaction: (transaction) =>
        set((state) => ({
          transactions: [transaction, ...state.transactions],
        })),

      deleteTransaction: (id) =>
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id),
        })),

      startEditTransaction: (transaction) =>
        set({ editingTransaction: transaction }),

      updateTransaction: (updatedTransaction) =>
        set((state) => ({
          transactions: state.transactions.map((t) =>
            t.id === updatedTransaction.id ? updatedTransaction : t
          ),
          editingTransaction: null,
        })),
    }),
    {
      // persist bifează cerința de salvare a datelor după refresh folosind localStorage.
      name: "transactions-storage",
    }
  )
)

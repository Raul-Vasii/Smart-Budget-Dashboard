const categories = [
  "Food",
  "Transport",
  "Work",
  "Shopping",
  "Bills",
  "Health",
  "Entertainment",
  "Other",
];

function FilterBar({
  searchTerm,
  setSearchTerm,
  filterType,
  setFilterType,
  filterCategory,
  setFilterCategory,
  sortBy,
  setSortBy,
  resetFilters,
}) {
  /*
    FilterBar bifează cerința avansată din ghid pentru filtrare și sortare.
    Aici utilizatorul poate căuta după titlu, filtra după tip și categorie,
    apoi sorta după dată sau sumă. Butonul de reset readuce rapid dashboard-ul
    la starea implicită, ceea ce face interfața mai ușor de folosit și explicat.
  */
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-4 mt-8 transition-colors duration-300">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Search
          </label>
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Filter by Type
          </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
          >
            <option value="all">All</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Filter by Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
          >
            <option value="all">All Categories</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1">
            Sort by
          </label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-400 transition-colors duration-300"
          >
            <option value="newest">Newest Date</option>
            <option value="oldest">Oldest Date</option>
            <option value="highest">Highest Amount</option>
            <option value="lowest">Lowest Amount</option>
          </select>
        </div>
      </div>

      <div className="mt-4 flex justify-stretch sm:justify-end">
        <button
          onClick={resetFilters}
          className="w-full sm:w-auto px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default FilterBar;

function Header({ darkMode, toggleDarkMode }) {
  return (
    <header className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="relative flex items-center justify-between min-h-[72px]">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition z-10"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center px-12">
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white leading-tight">
              Smart Budget Dashboard
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Track your income and expenses
            </p>
          </div>

          <div className="flex items-center gap-2 min-w-0 z-10">
            <span className="hidden sm:inline text-sm text-gray-700 dark:text-gray-200 truncate">
              Alex Johnson
            </span>
            <div className="w-8 h-8 shrink-0 bg-orange-300 rounded-full flex items-center justify-center text-white font-bold">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

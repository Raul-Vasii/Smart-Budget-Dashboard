import { useEffect, useState } from "react";

function useDarkMode() {
    const [darkMode, setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")
        return savedTheme === "dark"
    })

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark")
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")
        }
    }, [darkMode])

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev)
    }

    return {darkMode, toggleDarkMode}
}

export default useDarkMode
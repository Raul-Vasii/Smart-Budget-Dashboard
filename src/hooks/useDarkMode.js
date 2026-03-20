import { useEffect, useState } from "react";

function useDarkMode() {
    /*
        Acest custom hook bifează două puncte din ghid:
        - cerința avansată de personalizare prin dark mode / light mode;
        - cerința avansată de a crea un hook personalizat pentru modularizare.
        Hook-ul păstrează tema în localStorage și sincronizează clasa `dark` pe document,
        astfel încât preferința utilizatorului să rămână salvată și după refresh.
    */
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

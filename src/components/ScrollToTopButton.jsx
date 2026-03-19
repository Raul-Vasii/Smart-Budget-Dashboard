import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-3 z-50 md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600/90 dark:bg-indigo-500/90 text-white shadow-lg backdrop-blur-sm hover:bg-indigo-700 dark:hover:bg-indigo-400 active:scale-95 transition"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export default ScrollToTopButton
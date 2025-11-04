import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { toggleTheme } from '../../features/ui/uiSlice'

const ThemeToggle = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.ui.theme)

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => dispatch(toggleTheme())}
      className="relative inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur transition hover:bg-white/10"
    >
      <motion.span
        key={theme}
        initial={{ scale: 0, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0, rotate: 90, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
        className="absolute"
      >
        {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-brand-blue" />}
      </motion.span>
    </button>
  )
}

export default ThemeToggle

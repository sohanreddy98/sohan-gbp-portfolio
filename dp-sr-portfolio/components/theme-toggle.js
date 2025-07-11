'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion } from 'framer-motion'

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div
      className="switch"
      data-isOn={theme === 'dark'}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <motion.div className="handle" layout transition={spring}>
        {theme === 'dark' ? <Moon size={14} /> : <Sun size={14} />}
      </motion.div>
    </div>
  )
}

const spring = {
  type: 'spring',
  stiffness: 700,
  damping: 30,
} 
"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    // Use resolvedTheme (dark/light) if available, otherwise fallback to user preference.
    // resolvedTheme handles 'system' preference automatically.
    const currentTheme = resolvedTheme || theme

    return (
        <button
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className={cn(
                "fixed bottom-8 right-8 z-50 p-3 rounded-full transition-all duration-300 shadow-lg border",
                currentTheme === "dark"
                    ? "bg-zinc-800 text-zinc-100 border-zinc-700 hover:bg-zinc-700 hover:scale-110"
                    : "bg-white text-zinc-900 border-zinc-200 hover:bg-zinc-100 hover:scale-110"
            )}
            aria-label="Toggle theme"
        >
            {currentTheme === "dark" ? (
                <Sun className="h-5 w-5" />
            ) : (
                <Moon className="h-5 w-5" />
            )}
        </button>
    )
}

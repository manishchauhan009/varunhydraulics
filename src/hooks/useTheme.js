import { useEffect, useState, useCallback } from 'react'

const STORAGE_KEY = 'vh_theme' // 'light' | 'dark' | 'system'

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        try {
            const stored = localStorage.getItem(STORAGE_KEY)
            if (stored) return stored
        } catch (e) { }
        // respect system preference
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        return prefersDark ? 'dark' : 'light'
    })

    // apply theme to documentElement
    const apply = useCallback((t) => {
        const html = document.documentElement
        if (t === 'dark') {
            html.classList.add('dark')
        } else {
            html.classList.remove('dark')
        }
    }, [])

    useEffect(() => {
        apply(theme)
        try { localStorage.setItem(STORAGE_KEY, theme) } catch (e) { }
    }, [theme, apply])

    const toggle = useCallback(() => {
        setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    }, [])

    return { theme, setTheme, toggle }
}

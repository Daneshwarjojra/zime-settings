"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Ensure component runs only after mount (fixes hydration issues)
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex justify-end">
            <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 cursor-pointer border rounded-md dark:bg-gray-800 dark:text-white"
            >
                {theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
        </div>
    );
}

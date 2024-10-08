"use client"
import { Section } from "./Section"
import * as React from "react"
import { useEffect, useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import LanguageSwitcher from './LanguageSwitcher';

export const Header = () => {

    const [activeTheme, setActiveTheme] = useState<string>('system');

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "system" || !savedTheme) {
        applySystemTheme();
        setActiveTheme("system");
    } else {
        applyTheme(savedTheme);
        setActiveTheme(savedTheme);
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = () => {
        if (!savedTheme || savedTheme === "system") {
            applySystemTheme();
        }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);

    return () => {
        mediaQuery.removeEventListener("change", handleSystemThemeChange);
    };
    }, []);

    const applyTheme = (theme: string) => {
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    }
    };

    const handleThemeChange = (newTheme: string) => {
    setActiveTheme(newTheme)
    localStorage.setItem('theme', newTheme);
    if (newTheme === 'system') {
        applySystemTheme();
    } else {
        applyTheme(newTheme);
    }
    };

    const applySystemTheme = () => {
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (systemPrefersDark) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    }

    return(
        <header className="sticky top-0">
            <Section className="flex items-baseline justify-between">
                <h1 className="text-xl">Bastien Andre</h1>
                <div className="flex items-center">

                    <LanguageSwitcher />

                    {activeTheme !== "light" && (
                        <button onClick={() => handleThemeChange("light")}><IoIosSunny size={20} /></button>
                        
                    )}
                    {activeTheme !== "dark" && (
                        <button onClick={() => handleThemeChange("dark")}><IoMoonOutline size={20} /></button>
                    )}
                </div>
            </Section>
        </header>
    )
}
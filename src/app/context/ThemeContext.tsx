"use client"

import { createContext, ReactNode, useState } from 'react';

enum Mode {
    Light = 'light',
    Dark = 'dark'
}

interface IContext { toggle?: () => void, mode?: Mode };

export const ThemeContext = createContext<IContext>({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [mode, setMode] = useState(Mode.Dark);

    const toggle = () => {
        setMode(prev => prev === Mode.Dark ? Mode.Light : Mode.Dark);
    };

    return <ThemeContext.Provider value={{ toggle, mode }}><div className={`theme ${mode}`}>{children}</div></ThemeContext.Provider>
}
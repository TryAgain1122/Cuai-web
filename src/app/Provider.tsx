'use client';

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

interface ProviderProps {
    children: React.ReactNode;
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    },[])

    if(!mounted) {
        return <>{children}</>
    }
    return (
    <div>
        <ThemeProvider
            enableSystem={true}
            defaultTheme="system"
        >
            {children}
        </ThemeProvider>
    </div>
  )
}

export default Provider
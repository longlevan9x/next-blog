// components/ThemeWrapper.js
import {ThemeProvider} from 'next-themes';
import React from "react";

const ThemeWrapper = ({children}: { children: React.ReactNode }) => {
    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            {children}
        </ThemeProvider>
    );
};

export default ThemeWrapper;

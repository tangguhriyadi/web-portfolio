"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { ThemeProviderProps as NextThemeProviderProps } from "next-themes/dist/types";
import React from "react";

interface ThemeProviderProps extends NextThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  ...restProps
}) => {
  return <NextThemeProvider {...restProps}>{children}</NextThemeProvider>;
};

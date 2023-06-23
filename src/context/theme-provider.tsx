"use client";
import * as React from "react";

import { ThemeProvider as TProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

type ProviderProps = {
  children: React.ReactNode;
} & ThemeProviderProps;

const AppContext = React.createContext<{ fontsLoaded: boolean }>({
  fontsLoaded: false,
});

export const useAppContext = () => React.useContext(AppContext);

export function ThemeProvider({ children, ...props }: ProviderProps) {
  return (
    <TProvider
      {...props}
      defaultTheme="dark"
      attribute="class"
      enableSystem
      disableTransitionOnChange
    >
      <>{children}</>
    </TProvider>
  );
}

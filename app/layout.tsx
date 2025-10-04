import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import { QueryProvider } from "./services/QueryProvider";

export const metadata: Metadata = {
  title: "Hungaroton Artist",
  description: "Hungaroton Artist Discography",
  keywords: "Hungaroton, Artist, Discography, Music, Albums",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu">
      <ThemeProvider theme={theme}>
        <QueryProvider>
          <CssBaseline />
          <Suspense>
            <body>{children}</body>
          </Suspense>
        </QueryProvider>
      </ThemeProvider>
    </html>
  );
}

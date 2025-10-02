import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./utils/theme";
import { QueryProvider } from "./services/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hungaroton Artist",
  description: "Hungaroton Artist Discography",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryProvider>
          <body>{children}</body>
        </QueryProvider>
      </ThemeProvider>
    </html>
  );
}

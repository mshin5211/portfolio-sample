import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDNvaUaNKwsy99pNb_b7z4X6hg7t5TQyDA",
  authDomain: "portfolio-sample-mshin.firebaseapp.com",
  projectId: "portfolio-sample-mshin",
  storageBucket: "portfolio-sample-mshin.appspot.com",
  messagingSenderId: "6367319430",
  appId: "1:6367319430:web:214887a0d4275a41ec8807",
  measurementId: "G-2G7X9LVG5L" };


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minseob's Portfolio",
  description: "Practice Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          {children}
      </ThemeProvider>  
        
      </body>
    </html>
  );
}

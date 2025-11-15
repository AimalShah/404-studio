import type { Metadata } from "next";
import {Roboto, Instrument_Serif, Poppins} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScrollProvider from "@/components/smooth-scroll-provider";

const roboto = Roboto({
   subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto'
})

export const metadata: Metadata = {
  title: "404-Studio",
  description: "A Studio That fine Websites",
};

export const instrument_serif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-instrument'
})
export const poppins = Poppins({
   subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppin'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');
        </style>
      </head>
      <SmoothScrollProvider>
        <body
          className={`${roboto.variable} ${instrument_serif.variable} ${poppins.variable}  antialiased`}
          cz-shortcut-listen="true"
        >
          <Navbar />
          {children}
        </body>
      </SmoothScrollProvider>
    </html>
  );
}

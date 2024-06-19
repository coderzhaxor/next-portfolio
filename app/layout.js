import Link from "next/link";
import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Logo } from "@/components/Logo";

import "./globals.css";

export const metadata = {
  title: "Portfolio Alif Januantara Prima",
  description: "Hello, welcome to my world!",
  keywords: ["Portfolio", "Alif Januantara Prima"],
};

export default function RootLayout({ children }) {
  const delay = 6000;
  setTimeout(() => {}, delay);
  
  return (
    <html lang="en">
      <body className='relative w-full min-h-screen bg-[#0B1121] font-noto'>
        <Suspense fallback={<Loading />}>
          <div class="absolute inset-0 -z-50 h-full w-full bg-transparent bg-[linear-gradient(to_right,#f0f0f002_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f002_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
            <div className="bg-transparent relative">
              <Navbar />
              <div className="mt-20">
                {children}
              </div>
            </div>
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}

function Loading() {
  return (
    <div className='w-full h-full absolute top-0 z-10 bg-[#171F2B] flex flex-col justify-center items-center'>
      <Logo className='w-20 animate-spin duration-500' />
      <h1 className='text-white text-3xl mt-6'>Welcome to my portfolio!</h1>
    </div>
  )
}

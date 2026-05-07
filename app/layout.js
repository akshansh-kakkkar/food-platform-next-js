"use-client";
import Link from "next/link";
import "./globals.css";
import { Roboto } from "next/font/google";
import PageTransition from "./PageTransition";
const roboto = Roboto({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <header>
          <nav className="bg-gray-800 ">
            <div className="flex justify-between flex-col sm:gap-0 gap-4 sm:flex-row items-center text-white text-2xl  py-6 px-5">
              <Link href={'/'} className={`mx-12 text-center font-bold tracking-widest text-lg  sm:text-4xl ${roboto.className} `}>
Recipe Ninja              </Link>
              <div className={`flex gap-8 mx-12 ${roboto.className} text-lg`}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <PageTransition>
          <main className="flex-grow">{children}</main>
        </PageTransition>
        <footer>
          <p
            className={`bg-gray-800  w-full py-5 flex justify-center ${roboto.className} text-lg sm:text-2xl text-center  text-white`}
          >
            &copy; Foodies Community - Share the Love of Food
          </p>
        </footer>
      </body>
    </html>
  );
}

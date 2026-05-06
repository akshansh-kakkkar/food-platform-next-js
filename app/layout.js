import Link from "next/link";
import "./globals.css";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="bg-gray-800">
            <div className="flex justify-between text-white text-2xl  py-6 px-5">
              <Link href={'/'} className={`mx-12 text-2xl ${roboto.className} `}>
                Foodies Community
              </Link>
              <div className={`flex gap-8 mx-12 ${roboto.className} text-lg`}>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/contact"}>Contact</Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p
            className={`bg-gray-800 bottom-0 absolute w-full py-5 flex justify-center ${roboto.className} text-2xl text-white`}
          >
            &copy; Foodies Community - Share the Love of Food
          </p>
        </footer>
      </body>
    </html>
  );
}

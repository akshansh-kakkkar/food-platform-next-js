"use client"
import Link from "next/link";
import Image from "next/image";
import { Lato, Roboto } from "next/font/google";
import {motion, scale} from 'motion/react'
const lato = Lato({
 subsets: ["latin"],
 weight : ['400', '700'],
 display : 'swap'
})
const roboto = Roboto({
  subsets: ["latin"],
});

export default function Home() {
  return <div className="flex lg:flex-row gap-5 lg:gap-0 flex-col mx-22 justify-around items-center h-screen text-gray-700">
    <div className="flex  flex-col lg:items-start items-center gap-8">
      <h1 className={`lg:text-7xl lg:text-start text-center text-6xl ${lato.className}`}>Recipe Ninja</h1>
      <p className={`lg:w-120 text-xl lg:text-left text-center lg:text-2xl text-gray-600  ${roboto.className}`}>Browse through our collections of delecious recipes shared by food
        lovers worldwide!</p>
        <div className="flex gap-4">
        <motion.div whileTap={{scale:1.1}} whileHover={{scale:0.95}}>
        <Link className="lg:text-xl text-lg text-center lg:ext-2xl bg-blue-950 shadow-2xl shadow-blue-950  flex text-white w-fit py-3 px-5 lg:px-12" href={'/meals'}>View Recipes</Link>
        </motion.div>
                <motion.div whileTap={{scale:1.1}} whileHover={{scale:0.95}}>
        <Link className="lg:text-xl text-lg text-center lg:ext-2xl border-2 border-blue-950 shadow-2xl flex text-blue-950 w-fit py-3 px-5 lg:px-12" href={'/dashboard'}>View Dashboard</Link>
        </motion.div>
        </div>
    </div>
    <div>
<Image height={200} width={480} src="/hero.png" alt="hero"/>
    </div>
  </div>;
}

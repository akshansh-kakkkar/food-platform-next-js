"use client"
import Link from "next/link";
import {motion} from "motion/react"
export default function MealsLayout({ children }) {
  return (
    <div>
        <div className="mx-12 mt-12 z-20">
      <div className="bg-amber-100  flex flex-col gap-3  p-5 border-2 border-yellow-400">
        <h1 className={`text-2xl text-yellow-800`}>Meals Section</h1>
        <p className="text-xl font-medium text-yellow-600">Discover amazing meals from our community of food lovers</p>
        </div>
        <nav className="flex gap-2 z-202">
          <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}}><Link className="flex -translate-y-2 rounded-lg bg-orange-400 text-white text-md sm:text-2xl p-2" href={"/meals"}>All Meals</Link></motion.div>
           <motion.div whileHover={{scale:1.1}} whileTap={{scale:0.95}} className="flex -translate-y-2 rounded-lg bg-green-600 text-white text-md sm:text-2xl p-2"><Link  href={"/"}>Back to home</Link></motion.div>
        </nav>
      
</div>
      {children}
    </div>
  );
}

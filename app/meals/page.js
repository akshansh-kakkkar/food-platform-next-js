"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Roboto } from "next/font/google";
import {motion} from "motion/react";
import { meals } from "../data/meals";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function mealsPerPage() {

  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 5;
  const starIndex = (currentPage - 1) *  mealsPerPage;
  const endIndex = starIndex +  mealsPerPage;
  const currentMeals = meals.slice(starIndex, endIndex);
  const totalPages = Math.ceil(meals.length / mealsPerPage) ;

  return (
    <div className="m-4">
      <div className="mx-8 my-4 flex gap-1 flex-col">
        <h1 className={`text-lg font-medium ${roboto.className}`}>
          Discover Amazing Meals
        </h1>
        <p className={`text-lg font-medium ${roboto.className}`}>
          Browse through our collections of delecious recipes shared by food
          lovers worldwide!
        </p>
      </div>

      <div className="flex flex-col gap-5 mx-8 my-4">
        {currentMeals.map((meal) => (
          <Link
            className="bg-blue-50 group transition-all duration-300  border-1 border-orange-500 rounded-2xl gap-2 p-4 flex flex-col"
            key={meal.slug}
            href={`/meals/${meal.slug}`}
          >
            <h3 className={`${roboto} text-2xl font-semibold`}>{meal.name}</h3>
            <p className={`${roboto} text-lg font-medium`}>By Chef - {meal.chef}</p>
            <div className={`${roboto} group-hover:underline text-orange-500 underline-offset-4 transition-all duration-700  `} href={`/meals/${meal.slug}`}>View Recipe</div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end gap-4 mx-8 mt-8 items-center">
        <motion.button whileHover={{scale:0.95}} whileTap={{scale : 1.1}} disabled={currentPage === 1} onClick={()=> setCurrentPage(currentPage-1)} className="bg-blue-950 disabled:bg-[#162555bb] cursor-pointer disabled:cursor-not-allowed  text-white px-2 rounded-lg py-1"><ChevronLeft size={36}/></motion.button>
        <div className="text-lg">Page {currentPage} of {totalPages}</div>
        <motion.button whileHover={{scale:0.95}} whileTap={{scale : 1.1}}  disabled={currentPage === totalPages} onClick={()=> setCurrentPage(currentPage + 1)} className="bg-blue-950 disabled:cursor-not-allowed cursor-pointer disabled:bg-[#162555bb] text-white px-2 rounded-lg py-1"><ChevronRight size={36}/></motion.button>
      </div>
    </div>
  );
}
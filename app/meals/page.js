"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Roboto } from "next/font/google";
import { motion } from "motion/react";
import Image from "next/image";
import { meals } from "../data/meals";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function mealsPerPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const mealsPerPage = 2;
  const starIndex = (currentPage - 1) * mealsPerPage;
  const endIndex = starIndex + mealsPerPage;
  const currentMeals = meals.slice(starIndex, endIndex);
  const totalPages = Math.ceil(meals.length / mealsPerPage);

  return (
    
    <div className="m-4">
      <div className="mx-8 my-4 flex gap-1 flex-col">
        <h1 className={`text-4xl font-medium ${roboto.className}`}>
          Discover Amazing Meals
        </h1>
        <p className={`text-lg font-medium ${roboto.className}`}>
          Browse through our collections of delecious recipes shared by food
          lovers worldwide!
        </p>
      </div>
      <div className="flex md:flex-row flex-col  gap-12 my-18 justify-center md:justify-around">
        {currentMeals.map((meal) => (
          <Link
            href={`/meals/${meal.slug}`}
            key={meal.id}
            className="bg-white cursor-pointer md:p-4 group hover:scale-[108%] transition-transform duration-300 hover:shadow-xl shadow-lg max-w-[600px] rounded-xl min-h-[400px] max-h-[550px]"
          >
            <div className="flex justify-between relative">
              <div className="relative w-full justify-end h-[220px]">
                <Image
                  fill
                  className="object-cover h-full  rounded-t-xl w-full"
                  src={meal.image}
                  alt={meal.name}
                />
              </div>
              <div className="absolute transition-all duration-300 opacity-0 translate-x-4 group-hover:opacity-100  right-4 top-4 p-3  items-center justify-center">
                <div className="bg-blue-950  p-3 rounded-full ">
                  <ChevronRight color="white" strokeWidth={4} size={24} />
                </div>
              </div>
            </div>
            <div className="text-2xl text-gray-700 font-bold  uppercase mt-8 mx-8">
              {meal.name}
            </div>
            <div className="text-lg text-gray-500 font-normal mt-2 mx-8">
              {meal.description}
            </div>
            <div className="mt-5 flex justify-center items-center mx-7">
              <div className="bg-gray-300 w-full h-[0.04px]"></div>
            </div>
            <div className="flex justify-around mt-2">
              <div className="text-xl text-gray-700 font-medium  uppercase  mt-2 mx-8">
                Chef : {meal.chef}
              </div>
              <div className="text-xl text-gray-700 font-medium  uppercase  mt-2 mx-8">
                Likes : {meal.likes}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-end gap-4 mx-8 mt-8 items-center">
        <motion.button
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 1.1 }}
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
          className="bg-blue-950 disabled:bg-[#162555bb] cursor-pointer disabled:cursor-not-allowed  text-white px-2 rounded-lg py-1"
        >
          <ChevronLeft size={36} />
        </motion.button>
        <div className="text-lg">
          Page {currentPage} of {totalPages}
        </div>
        <motion.button
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 1.1 }}
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
          className="bg-blue-950 disabled:cursor-not-allowed cursor-pointer disabled:bg-[#162555bb] text-white px-2 rounded-lg py-1"
        >
          <ChevronRight size={36} />
        </motion.button>
      </div>
    </div>
  );
}

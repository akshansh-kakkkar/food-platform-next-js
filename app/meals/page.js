"use client";
import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Roboto } from "next/font/google";
import {motion} from "motion/react"
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function meals() {
  const meals = [
    {
      slug: "spaghetti-carbonara",
      name: "Spaghetti Carbonara",
      chef: "Maria",
    },
    {
      slug: "chicken-curry",
      name: "Chicken Curry",
      chef: "Raj",
    },
    {
      slug: "high-protein-taco",
      name: "Veg Tempeh Taco",
      chef: "Carlos",
    },
    {
      slug: "paneer-butter-masala",
      name: "Paneer Butter Masala",
      chef: "Riya",
    },
    {
      slug: "classic-cheeseburger",
      name: "Classic Cheese Burger",
      chef: "Sofia",
    },
    {
      slug: "margherita-pizza",
      name: "Margherita Pizza",
      chef: "John",
    },
    {
      slug: "sushi",
      name: "Sushi",
      chef: "Kenji",
    },
    {
      slug: "grilled-salmon",
      name: "Grilled Salmon",
      chef: "Aarav",
    },
    {
      slug: "vegan-rice-bowl",
      name: "Vegan Rice Bowl",
      chef: "Olivia",
    },
    {
      slug: "falafel-wrap",
      name: "Falafel Wrap",
      chef: "Layla",
    },
    {
      slug: "mexican-burrito",
      name: "Mexican Burrito",
      chef: "Deigo",
    },
    {
      slug: "thai-curry",
      name: "Thai Curry",
      chef: "Nina",
    },
    {
      slug: "ramen-bowl",
      name: "Ramen Bowl",
      chef: "Haruto",
    },
    {
      slug: "bbq-steak",
      name: "BBQ Steak",
      chef: "Liam",
    },
    {
      name: "Avocado Toast",
      slug: "avocado-toast",
      chef: "Chloe",
    },
    {
      slug: "pesto-pasta",
      name: "Pesto Pasta",
      chef: "Marco",
    },
    {
      slug: "fried-rice-special",
      name: "Fried Rice Special",
      chef: "Wei",
    },
    {
      slug: "ceaser-salad",
      name: "Ceaser Salad",
      chef: "Sophia",
    },
    {
      slug: "tandoori-chicken",
      name: "Tandoori Chicken",
      chef: "Arjun",
    },
    {
      slug: "shrimp-noodles",
      name: "Shrimp Noodles",
      chef: "Mia",
    },
    {
      slug: "loaded-fries",
      name: "Loaded Fries",
      chef: "Ethan",
    },
    {
      slug: "mushroom-risotto",
      name: "Mushroom Risotto",
      chef: "Isabella",
    },
    {
      slug: "kim-bibimbap",
      name: "Kim Bibimbap",
      chef: "Jiho",
    },
    {
      slug: "chocolate-pancakes",
      name: "Chocolate Pancakes",
      chef: "Noah",
    },
    {
      slug: "spinach-lasgaa",
      name: "Spinach Lasagna",
      chef: "Elena",
    },
    {
      slug: "fish-and-chips",
      name: "Fish and Chips",
      chef: "Oliver",
    },
    {
      slug: "dumplings",
      name: "Dumplings",
      chef: "Mei",
    },
    {
      slug: "fruit-juice",
      name: "Fruit Juice",
      chef: "Ava",
    },
  ];
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

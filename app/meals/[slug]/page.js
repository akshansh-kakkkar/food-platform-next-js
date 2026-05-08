import React from "react";
import { meals } from "@/app/data/meals";
import Link from "next/link";
import Image from "next/image";
import { Poppins, Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
});
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export default async function mealDetailsPage({ params }) {
  const { slug } = await params;
  const meal = meals.find((m) => m.slug === slug);

  if (!meal) {
    return (
      <div>
        <div className="flex text-blue-950 justify-center items-center w-full h-[50vh] text-9xl font-bold">
          404
        </div>
      </div>
    );
  }
  return (
    <div className="h-full">
      <Link
        href={"/meals"}
        className="mx-12 text-orange-400 text-lg hover:underline underline-offset-5"
      >
        Back to menu
      </Link>
      <div className="lg:mx-54 mx-4 md:mx-12">
        <div className="bg-white p-4 md:p-12 rounded-2xl mt-6 shadow-md">
          <div className="flex justify-between  relative">
            <div className="relative  w-full justify-end h-[520px]">
              <Image
                fill
                className="object-cover rounded-2xl h-full w-full"
                src={meal.image}
                alt={meal.name}
              />
              <div className="absolute inset-0 w-full h-30 bg-gradient-to-b from-black/35 to-black/75   rounded-t-2xl"></div>
              <div
                className={`absolute text-2xl sm:text-3xl mt-8 mx-6 text-white font-bold uppercase ${roboto.className}`}
              >
                {meal.name}
              </div>
              <div
                className={`absolute text-lg mt-20 mx-6 text-white font-medium ${roboto.className}`}
              >
                Chef : {meal.chef}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg mt-4 rounded-2xl mb-4 p-5">
          <div>
            <div className="mb-3 flex flex-col gap-1">
              <h2
                className={`text-2xl text-gray-950 ${poppins.className} uppercase`}
              >
                Description
              </h2>
              <div className="h-[4px] rounded-2xl w-39 bg-orange-400"></div>
            </div>
            <div className={`text-xl text-gray-600 ${poppins.className}`}>
              {meal.description}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg mt-4 rounded-2xl mb-4 p-5">
          <div className="gap-8 flex flex-col">
            <div className="mb-3 flex flex-col gap-1">
              <h2
                className={`text-2xl text-gray-950 ${poppins.className} uppercase`}
              >
                Instructions
              </h2>
              <div className="h-[4px] rounded-2xl w-43 bg-orange-400"></div>
            </div>
            <div>
              <div
                className={`md:text-2xl text-lg text-green-700 flex gap-4 items-center  ${poppins.className}`}
              >
                <span className="text-2xl text-white bg-orange-400 p-2 px-5 rounded-full ">
                  1
                </span>{" "}
                {meal.instructions[0]}
              </div>
            </div>
            <div
              className={`md:text-2xl text-lg text-green-700 flex gap-4 items-center ${poppins.className}`}
            >
              <span className="text-2xl text-white bg-orange-400 p-2 px-4 rounded-full ">
                2
              </span>{" "}
              {meal.instructions[1]}
            </div>
            <div
              className={`md:text-2xl text-lg text-green-700 flex gap-4 items-center ${poppins.className}`}
            >
              <span className="text-2xl text-white bg-orange-400 p-2 px-4 rounded-full ">
                3
              </span>{" "}
              {meal.instructions[2]}
            </div>
            <div
              className={`md:text-2xl text-lg text-green-700 flex gap-4 items-center ${poppins.className}`}
            >
              <span className="text-2xl text-white bg-orange-400 p-2 px-4 rounded-full ">
                4
              </span>{" "}
              {meal.instructions[3]}
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg mt-4  rounded-2xl mb-4 p-5">
          <div className="mb-3 flex flex-col gap-1">
            <h2
              className={`text-2xl text-gray-950 ${poppins.className} uppercase`}
            >
              Quick info
            </h2>
            <div className="h-[4px]  rounded-2xl w-35 bg-orange-400"></div>
            <div className="mx-5 my-4 cursor-pointer hover:scale-[99%] transition-all hover:-translate-y-2 duration-300 bg-gray-100 p-3 rounded-lg flex justify-between">
              <div className="text-xl text-blue-950 font-medium">Prep Time</div>
              <div className="text-xl text-orange-400 font-medium">
                {meal.prepTime}
              </div>
            </div>
            <div className="mx-5 cursor-pointer hover:scale-[99%] duration-300 hover:-translate-y-2 bg-gray-100 mb-2 p-3 rounded-lg flex justify-between">
              <div className="text-xl text-blue-950 font-medium">Cook Time</div>
              <div className="text-xl text-orange-400 font-medium">
                {meal.cookTime}
              </div>
            </div>
            <div className="mx-5 my-2 hover:scale-[99%] cursor-pointer duration-300 hover:-translate-y-2 bg-gray-100 p-3 rounded-lg flex justify-between">
              <div className="text-xl text-blue-950 font-medium">Servings</div>
              <div className="text-xl text-orange-400 font-medium">
                {meal.serving}
              </div>
            </div>

            <div className="mx-5 my-2 cursor-pointer hover:scale-[99%] duration-300 hover:-translate-y-2 bg-gray-100 p-3 rounded-lg flex justify-between">
              <div className="text-xl text-blue-950 font-medium">Likes</div>
              <div className="text-xl text-orange-400 font-medium">
                {meal.likes}
              </div>
            </div>
            <div className="mx-5 hover:-translate-y-2 hover:scale-[99%] duration-300 cursor-pointer my-2 bg-gray-100 p-3 rounded-lg flex justify-between">
              <div className="text-xl text-blue-950 font-medium">Cuisine</div>
              <div className="text-xl text-orange-400 font-medium">
                {meal.cuisine}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-lg mt-4  rounded-2xl mb-4 p-5">
          <div className="mb-3 flex flex-col gap-1">
            <h2
              className={`text-2xl text-gray-950 ${poppins.className} uppercase`}
            >
              Chef Info
            </h2>
            <div className="h-[4px] rounded-2xl w-30 bg-orange-400"></div>
          </div>
          <div
            className={`${poppins.className} uppercase text-2xl text-gray-800 font-bold m-3`}
          >
            Name : {meal.chef}
          </div>
          <div className={`${poppins.className} text-gray-500 text-xl m-3`}>
            <span className="text-gray-800  font-bold">Email : </span>{" "}
            {meal.email}
          </div>
        </div>
      </div>
    </div>
  );
}

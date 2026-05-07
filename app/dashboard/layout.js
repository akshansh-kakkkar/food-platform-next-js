import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
});
export default function layout({ analytics, popularmeals, activity, note }) {
  return (
    <>
      <h1
        className={`flex text-blue-950  text-3xl font-medium justify-center my-3 mt-6 items-center ${roboto.className}`}
      >
        Foodies Dashboard
      </h1>
      <div className="flex flex-col gap-5">
        <div className="md:grid flex flex-col md:grid-cols-3 gap-12 mx-18">
          <div className="bg-white col-span-2  p-6 rounded-xl  shadow">
            <h2 className="text-4xl font-medium text-blue-950 md:px-12">
              Analytics
            </h2>
            {analytics}
          </div>
          <div className="bg-white col-span-1 rounded-xl shadow">
            <div className="flex mx-4 text-center justify-between items-center">
              {" "}
              <h2 className="text-2xl font-medium text-blue-950  mb-4">
                Popular Meals
              </h2>
              <h2 className="text-2xl text-blue-900">Likes</h2>
              
            </div>
            {popularmeals}
          </div>
        </div>
        <div className="md:grid flex mb-4  flex-col md:grid-cols-3 gap-12 mx-18 ">
          <div className="bg-white col-span-2 flex flex-col p-18 rounded-xl shadow">
            <h2 className="text-2xl text-blue-900">Recent Activity</h2>
            {activity}
          </div>
          <div className="bg-white col-span-1 p-6 rounded-xl shadow">
            {note}
          </div>
        </div>
      </div>
    </>
  );
}

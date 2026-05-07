import React from "react";
import { Roboto } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
});
export default function layout({ analytics, popularmeals, recentActivity }) {
  return (
    <>
      <h1 className={`flex justify-center my-3 mt-6 items-center text-4xl ${roboto.className}`}>
        Foodies Dashboard
      </h1>
      <div className="flex flex-col gap-5">
      <div className="grid grid-cols-3 gap-12 mx-18">
        
        <div  className="bg-white col-span-2  p-6 rounded-xl  shadow">
          <h2 className="text-2xl mb-4">Analytics</h2>
          {analytics}
        </div>
        <div className="bg-white col-span-1 p-6 rounded-xl shadow">
          <h2 className="text-2xl mb-4">Popular Meals</h2>
          {popularmeals}
        </div>
        </div>
        <div className="grid grid-cols-3 gap-12 mx-18">
           <div className="bg-white col-span-2 p-6 rounded-xl shadow">
            <h2>Recent Activity</h2>
            {recentActivity}
           </div>
        </div>
        </div>
        </>
  );
}

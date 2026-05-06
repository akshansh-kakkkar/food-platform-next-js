import React from "react";
export default async function mealDetailsPage({ params }) {
  const { slug } = await params;
  return (
    <div className="mx-12 my-12">
      <div className="flex flex-col gap-4 my-4">
        <h1 className="text-3xl font-semibold text-blue-950 ">Meal Details</h1>
        <p className="text-2xl">
          You are viewing the meal : <strong>{slug}</strong>
        </p>
        <p className="text-2xl">
          This page is dynamically generated based on URL parameters!
        </p>
      </div>
      <div className="bg-blue-100 border-blue-400 border-2 rounded-md flex flex-col gap-5 p-2 py-4 md:mr-16">
        <p className="text-xl">How This Works:</p>
        <p className="text-lg">
          The URL `/meals/{slug}` automatically passes `{slug}` as a parameter
          to this pages component.
        </p>
        <p  className="text-lg">
          We can use this parameter to fetch specific meal data, customize
          content and more.
        </p>
      </div>
    </div>
  );
}

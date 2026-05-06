import React from "react";
export default async function mealDetailsPage({ params }) {
  const { slug } =await params;
  return (
    <div>
      <h1>Meal Details</h1>
      <p>
        You are viewing the meal : <strong>{slug}</strong>
      </p>
      <p>This page is dynamically generated based on URL parameters!</p>
      <p>How This Works</p>
      <p>The URL `/meals/{slug}` automatically passes `{slug}` as a parameter to this pages component.</p>
      <p>We can use this parameter to fetch specific meal data, customize content and more.</p>
    </div>
  );
}

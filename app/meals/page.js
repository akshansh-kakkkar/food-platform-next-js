import Link from "next/link";
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
  ];

  return (
    <div>
      <h1>Discover Amazing Meals</h1>
      <p>
        Browse through our collections of delecious recipes shared by food
        lovers worldwide!
      </p>

      <div>
        {meals.map((meal)=>(
            <div key={meal.slug}>
                <h3>{meal.title}</h3>
                <p>By Chef - {meal.chef}</p>
                <Link href={`/meals/${meal.slug}`}>View Recipe</Link>
            </div>
        ))}
      </div>
    </div>
  );
}

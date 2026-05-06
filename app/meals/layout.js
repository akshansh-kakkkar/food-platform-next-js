import Link from "next/link";
export default function MealsLayout({ children }) {
  return (
    <div>
        <div className="mx-12 my-12">
      <div className="bg-amber-100  flex flex-col gap-3  p-5 border-2 border-yellow-400">
        <h1 className={`text-2xl text-yellow-800`}>Meals Section</h1>
        <p className="text-xl font-medium text-yellow-600">Discover amazing meals from our community of food lovers</p>
        </div>
        <nav className="flex gap-6">
          <Link className="flex bg-orange-400 text-white text-md sm:text-2xl p-2" href={"/meals"}>All Meals</Link>
          <Link className="flex bg-green-600 text-white text-md sm:text-2xl p-2" href={"/meals/share"}>Share your recipe</Link>
        </nav>
      
</div>
      {children}
    </div>
  );
}

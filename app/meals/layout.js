import Link from "next/link"
export default function MealsLayout({ children }) {
    return(
        <div>
            <h1>Meals Section</h1>
            <p>Discover amazing meals from  our community of food lovers </p>
            <nav>
                <Link href={'/meals'}>All Meals</Link>
                <Link href={'/meals/share'}>Share your recipe</Link>
            </nav>
            {children}
        </div>
    )
}

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <div>
      <nav>
        <Link href='/'>HOME</Link>
        <Link href='/about'>ABOUT</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </div>

  );
}

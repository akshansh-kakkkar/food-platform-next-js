import Link from "next/link";

export default function Home() {
  return (
    <div>
      click here to go to meals page 
    <Link href={"/meals"}>GO TO PAGE</Link>
    </div>
  );
}

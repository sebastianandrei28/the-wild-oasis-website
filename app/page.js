import Link from "next/link";
import Navigation from "./_components/Navigation";

export default function Home() {
  return (
    <>
      <h1>Welcome</h1>
      <Link href="/cabins"> Explore luxury cabins</Link>
    </>
  );
}

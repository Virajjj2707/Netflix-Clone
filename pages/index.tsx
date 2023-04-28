import Link from "next/link";

export default function Home() {
  return (
    <>
   <h1 className="text-2xl text-green-500">Netflix Clone</h1>
   <Link href={'/auth'}>Log In</Link>
    </>
  )
}

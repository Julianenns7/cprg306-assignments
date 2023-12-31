import StudentInfo from './my_components';
import Link from 'next/link';

export default function Home() {
  return (
      <main>
        <h1> CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        <Link href="/week2"> Week 2 </Link>
        <Link href="/week3"> week 3</Link>
        <Link href="/week4"> week 4 </Link>
        <Link href="/week5"> week 5 </Link>
        <Link href="/week6"> week 6 </Link>
        <Link href="/week7"> week 7 </Link>
        <Link href="/week8"> week 8 </Link>
      </main>
  )
}

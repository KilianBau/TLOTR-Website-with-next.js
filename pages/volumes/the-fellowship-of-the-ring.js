import Link from "next/link";
import { volumes } from "../data";
import Image from "next/image";
import cover from "../../public/the-fellowship-of-the-ring.png";

export default function TheFellowshipOfTheRing() {
  const theFellowship = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );
  console.log(theFellowship);
  return (
    <>
      <h1>{theFellowship.title}</h1>
      <p>{theFellowship.description}</p>
      <Image src={cover} alt="book cover" width={140} height={230} />
      <ul>
        {theFellowship.books.map((book) => (
          <li key={book.title}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link href="/volumes/the-return-of-the-king"> Previous</Link>
        </li>
        <li>
          <Link href="/volumes/the-two-towers">Next</Link>
        </li>

        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </>
  );
}

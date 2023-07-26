import Link from "next/link";
import { volumes } from "../data";
import cover from "../../public/the-two-towers.png";
import Image from "next/image";

export default function TheTwoTowers() {
  const theTowers = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <>
      <h1>{theTowers.title}</h1>
      <p>{theTowers.description}</p>
      <Image src={cover} alt="book cover" width={140} height={230} />

      <ul>
        {theTowers.books.map((book) => (
          <li key={book.title}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>

      <ul>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring"> Previous</Link>
        </li>
        <li>
          <Link href="/volumes/the-return-of-the-king">Next</Link>
        </li>

        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </>
  );
}

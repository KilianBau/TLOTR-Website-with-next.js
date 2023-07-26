import Link from "next/link";
import { volumes } from "../data";
import cover from "../../public/the-two-towers.png";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  const theKing = volumes.find(({ slug }) => slug === "the-return-of-the-king");

  return (
    <>
      <h1>{theKing.title}</h1>
      <p>{theKing.description}</p>
      <Image src={cover} alt="book cover" width={140} height={230} />

      <ul>
        {theKing.books.map((book) => (
          <li key={book.title}>
            {book.ordinal} {book.title}
          </li>
        ))}
      </ul>
      <ul>
        <li>
          <Link href="/volumes/the-two-towers"> Previous</Link>
        </li>
        <li>
          <Link href="/volumes/the-fellowship-of-the-ring">Next</Link>
        </li>

        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </>
  );
}

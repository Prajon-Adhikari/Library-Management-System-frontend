import BookCard from "@/Components/BookCard";

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "Spring in Action", author: "Craig Walls" },
];

export default function BooksPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Available Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

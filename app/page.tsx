// app/page.tsx

import Image from "next/image";

const shelves = [
  {
    title: "Currently Reading",
    books: [
      { id: 1, title: "Atomic Habits", cover: "/books/book1.jpg" },
      { id: 2, title: "Deep Work", cover: "/books/book2.jpg" },
    ],
  },
  {
    title: "Next Up",
    books: [
      { id: 4, title: "Lord of the Rings", cover: "/books/book3.jpg" },
      { id: 5, title: "1984", cover: "/books/book5.jpg" },
      { id: 6, title: "Design of Everyday Things", cover: "/books/book6.jpg" },
    ],
  },
  {
    title: "Finished",
    books: [
      { id: 7, title: "Steve Jobs", cover: "/books/book7.jpg" },
      { id: 8, title: "Clean Code", cover: "/books/book8.jpg" },
      { id: 9, title: "One Thing", cover: "/books/book1.jpg" },
    ],
  },
];

export default function LibraryDashboard() {
  return (
    <div className="min-h-screen p-8 ">
      <header className="flex items-center justify-between mb-10">
        <h1 className="text-2xl font-semibold">My Library</h1>
        <input
          placeholder="Search in my library"
          className="w-72 px-4 py-2 rounded-full border focus:outline-none"
        />
      </header>

      <div className="space-y-12">
        {shelves.map((shelf) => (
          <section key={shelf.title} className="relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">{shelf.title}</h2>
              <span className="text-sm text-gray-500 cursor-pointer">
                Full shelf →
              </span>
            </div>

            <div className=" rounded-xl p-6">
              <div className="flex gap-20">
                {shelf.books.map((book) => (
                  <div key={book.id}>
                    <div className="cursor-pointer relative z-10 h-48 w-36 overflow-hidden shadow-[-3px_-3px_10px_gray]  hover:scale-105 transition">
                      <Image
                        src={book.cover}
                        alt={book.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#e9d2ba] shadow-[-2px_2px_5px_#c8b29b] h-5 rounded-md absolute bottom-px left-2 right-0"></div>
          </section>
        ))}
      </div>
    </div>
  );
}

// app/page.tsx

import Image from "next/image";
import LibraryBanner from "@/Components/LibraryBanner";

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
      { id: 9, title: "Lord of the Rings", cover: "/books/book3.jpg" },
      { id: 10, title: "1984", cover: "/books/book5.jpg" },
      { id: 11, title: "Design of Everyday Things", cover: "/books/book6.jpg" },
      { id: 12, title: "Lord of the Rings", cover: "/books/book3.jpg" },
      { id: 13, title: "1984", cover: "/books/book5.jpg" },
      { id: 14, title: "Design of Everyday Things", cover: "/books/book6.jpg" },
    ],
  },
];

export default function LibraryDashboard() {
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between mb-10">
        <LibraryBanner />
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
              <div className="flex gap-18 h-50 w-[76vw] overflow-y-scroll scroll-smooth hide-scrollbar">
                {shelf.books.map((book) => (
                  <div key={book.id}>
                    <div className="cursor-pointer relative z-10 h-50 w-36 overflow-hidden shadow-[-3px_-3px_10px_gray] ">
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

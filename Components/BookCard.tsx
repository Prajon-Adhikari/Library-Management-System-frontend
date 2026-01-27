export default function BookCard({ book }: any) {
  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{book.title}</h3>
      <p className="text-gray-500 mb-4">{book.author}</p>

      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700">
        Borrow
      </button>
    </div>
  );
}

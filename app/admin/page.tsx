export default function AdminPage() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Admin Dashboard</h2>

      <div className="grid gap-4 max-w-md">
        <button className="bg-blue-600 text-white p-3 rounded-lg">
          Add Book
        </button>
        <button className="bg-yellow-500 text-white p-3 rounded-lg">
          Update Book
        </button>
        <button className="bg-purple-600 text-white p-3 rounded-lg">
          View Borrowed Books
        </button>
      </div>
    </div>
  );
}

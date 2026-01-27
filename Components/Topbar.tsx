export default function Topbar() {
  return (
    <header className="h-16 bg-white  border-b border-[#e2d8cc] flex items-center justify-between px-8">
      {/* Search */}
      <input
        placeholder="Search in my library"
        className="w-96 px-4 py-2 rounded-full border bg-white focus:outline-none"
      />

      {/* Right section */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Stephan</span>
        <div className="h-9 w-9 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}

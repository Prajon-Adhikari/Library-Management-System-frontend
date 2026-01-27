import Image from "next/image";

export default function LibraryBanner() {
  return (
    <div className="relative w-full rounded-2xl overflow-hidden bg-linear-to-r from-[#8aabed] via-[#a0b9ec] to-[#b0c5f3] px-10 py-4 flex items-center justify-between">
      {/* Left Floating Books */}
      <div className="hidden md:flex flex-col gap-4">
        <Image
          src="/books/bookstack1.png"
          alt="Books"
          width={180}
          height={180}
          className="animate-float"
        />
      </div>

      {/* Center Content */}
      <div className="text-center max-w-xl mx-auto text-white">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Welcome to our digital library
        </h1>

        <p className="text-sm md:text-base text-white/90 mb-6">
          Where stories, knowledge, and curiosity come together.
        </p>

        <button className="px-6 py-2.5 rounded-full bg-white text-indigo-600 font-medium hover:bg-gray-100 transition">
          Learn more
        </button>
      </div>

      {/* Right Floating Books */}
      <div className="hidden md:flex">
        <Image
          src="/books/bookstack2.png"
          alt="Books Stack"
          width={190}
          height={190}
          className="animate-float-slow"
        />
      </div>

      {/* Decorative dots */}
      <span className="absolute top-6 left-1/4 w-2 h-2 bg-yellow-300 rounded-full"></span>
      <span className="absolute bottom-10 right-1/3 w-3 h-3 bg-pink-300 rounded-full"></span>
      <span className="absolute top-1/2 right-10 w-2 h-2 bg-cyan-300 rounded-full"></span>
    </div>
  );
}

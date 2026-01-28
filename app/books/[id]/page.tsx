"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import {
  Star,
  Volume2,
  Eye,
  ArrowLeft,
  Download,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

export default function Page() {
  const { id } = useParams<{ id: string }>();

  return (
    <div className="min-h-[90vh] flex ">
      {/* LEFT PANEL */}
      <div className="w-[30%] bg-[#94792d] p-10 text-white relative">
        {/* Back */}
        <Link href={"/"}>
          <div className="flex items-center gap-2 text-sm opacity-80 mb-10 cursor-pointer">
            <ArrowLeft size={16} />
            <span>BACK</span>
          </div>
        </Link>

        {/* Book Cover */}
        <div className="absolute top-[10%] -right-40">
          <Image
            src="/books/book3.jpg" // dummy image
            alt="Six of Crows"
            width={340}
            height={340}
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Availability */}
        <div className="absolute bottom-5 gap-6 mt-8 text-sm opacity-90">
          <div className="flex gap-4 items-center">
            <h4 className="text-lg italic ">Available for</h4>
            <div className="flex border-2 p-2 items-center gap-2">
              <Volume2 size={16} />
            </div>
            <div className="flex items-center border-2 p-2 gap-2">
              <Eye size={16} />
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 ml-40 p-14 bg-white">
        {/* Tabs */}
        <div className="flex gap-10 text-sm font-medium text-gray-400 mb-8">
          <span className="text-indigo-600 border-b-2 border-indigo-600 pb-2">
            INFO
          </span>
          <span>REVIEWS (15)</span>
          <span>SIMILAR BOOKS</span>
        </div>

        {/* Title */}
        <p className="text-sm text-gray-400">2015</p>
        <h1 className="text-4xl font-serif text-gray-900 mt-2">
          The Chemistry of Life
        </h1>
        <p className="text-lg text-gray-500 mt-1">Leigh Bardugo</p>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={18}
              className={i <= 3 ? "text-indigo-500" : "text-gray-300"}
              fill={i <= 3 ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-600 leading-relaxed max-w-2xl">
          Ketterdam: a bustling hub of international trade where anything can be
          had for the right price—and no one knows that better than criminal
          prodigy Kaz Brekker. Kaz is offered a chance at a deadly heist that
          could make him rich beyond his wildest dreams. But he can’t pull it
          off alone...
        </p>

        <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl text-sm">
          Books is an amazing way to download and read books. Browse your
          library on a beautiful bookshelf, tap a book to open it, flip through
          pages with a swipe or tap, and bookmark or add notes to your favorite
          passages.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-10">
          <button className="flex items-center gap-2 bg-[#6188d6] cursor-pointer hover:bg-[#416cc2] text-white px-6 py-3 rounded-lg text-sm font-medium">
            <Download size={16} /> <span>Download</span>
          </button>
          <button className="flex items-center gap-2 bg-indigo-100 text-[#416cc2] cursor-pointer px-6 py-3 rounded-lg text-sm font-medium">
            <Bookmark size={16} />
            <span>Save</span>
          </button>
        </div>
      </div>
    </div>
  );
}

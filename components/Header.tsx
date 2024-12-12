"use client";
import React from "react";
import Link from "next/link"; // Use Next.js Link component instead of react-router-dom
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {
  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-4">
      <div className="font-bold ml-6 text-3xl">Bandage</div>
      <nav className="flex space-x-6 mr-20">
      <Link href="/" className="hover:text-gray-300">Home</Link>
      <Link href="/shop" className="hover:text-gray-300">Shop</Link>
      <Link href="/about" className="hover:text-gray-300">About</Link>
<Link href="/blog" className="hover:text-gray-300">Blog</Link>
<Link href="/contact" className="hover:text-gray-300">Contact</Link>
<Link href="/pages" className="hover:text-gray-300">Pages</Link>

      </nav>
      <div className="flex space-x-4">
        <Link href="#" className="hover:text-pink-900 text-blue-500 font-bold">Login / Register</Link>
        <Link href="#" className="hover:text-gray-900 text-2xl text-blue-600">
          <CiSearch />
        </Link>
        <Link href="#" className="hover:text-gray-900 text-2xl text-blue-600">
          <FaShoppingCart />
        </Link>
      </div>
    </div>
  );
}

export default Header;

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
//import { serviceBlogTitle } from "@/app/data/blogData";
import { postdata } from "@/app/data/postdata";

const HeaderMenu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md text-black">
      <nav className="container flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="text-xl font-bold">
          <Link href="/">
            <Image
              src="/image/logo-png.png"
              width={200}
              height={200}
              alt="Moving Quote New York"
            />
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden mx-auto md:flex items-center space-x-6 text-lg">
          {/* Home */}
          <li>
            <Link href="/Home" className="hover:text-orange-400">
              Home
            </Link>
          </li>

          {/* Services Dropdown */}
          <li className="group relative">
          <div className="flex items-center cursor-pointer hover:text-orange-400">
           <span>Services</span>
           <ChevronDown className="ml-2 w-4 h-4" />
          </div>
          <ul className="absolute left-0 mt-2 w-64 bg-gray-700 text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out invisible h-auto">
          <li className="px-4 py-2 hover:bg-gray-900">
          <Link href="/services/long-distance-moving">Long Distance Moving</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-900">
          <Link href="/services/auto-transport">Auto Transport</Link>
        </li>
          <li className="px-4 py-2 hover:bg-gray-900">
          <Link href="/services/storage-solutions">Storage Solutions</Link>
        </li>
        <li className="group relative px-4 py-2 hover:bg-gray-900">
        <div className="flex items-center cursor-pointer">
        <span className="hover:text-orange-400">Commercial Moving</span>
        <ChevronDown className="ml-2 w-4 h-4" />
      </div>
      {/* Nested Dropdown */}
      <ul className="absolute left-full top-0 mt-0 w-64 bg-gray-700 text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out invisible">
        <li className="px-4 py-2 hover:bg-gray-900">
          <Link href="/services/commercial-moving/office-relocation">
            Office Relocation
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-900">
          <Link href="/services/commercial-moving/retail-relocation">
            Retail Relocation
          </Link>
        </li>
        <li className="px-4 py-2 hover:bg-gray-900">
          <Link href="/services/commercial-moving/corporate-relocation">
            Corporate Relocation
          </Link>
        </li>
      </ul>
    </li>
    <li className="px-4 py-2 hover:bg-gray-900">
      <Link href="/services/specialized-moving">Specialized Moving</Link>
    </li>
    <li className="px-4 py-2 hover:bg-gray-900">
      <Link href="/services/small-moves">Small Moves</Link>
    </li>
  </ul>
  </li>



          {/* About Us Dropdown */}
          <li className="group relative">
            <div className="flex items-center cursor-pointer hover:text-orange-400">
              <span>About Us</span>
              <ChevronDown className="ml-2 w-4 h-4" />
            </div>
            <ul className="absolute left-0 mt-2 w-48 bg-gray-700 text-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out invisible">
              <li className="px-4 py-2 hover:bg-gray-900">
                <Link href="/allTestimonials">Testimonials</Link>
              </li>
            </ul>
          </li>

          {/* Contact */}
          <li>
            <Link href="/Contact" className="hover:text-orange-400">
              Contact
            </Link>
          </li>

          {/* Blog Dropdown */}
          <li className="group relative">
          <div className="flex items-center cursor-pointer hover:text-orange-500">
            <span className="text-lg">Blog</span>
          <ChevronDown className="ml-2 w-5 h-5 text-gray-300 transition-all duration-300 ease-in-out group-hover:rotate-180" />
        </div>

          <ul className="absolute left-0 mt-4 bg-gray-800 text-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out invisible overflow-y-auto max-h-96 w-80 p-4">
          <div className="bg-orange-600 p-2 text-white text-lg font-semibold rounded-md">
          Total Blogs: {postdata.length}
          </div>
          <div className="h-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {postdata.map((id) => (
            <li key={id.ID} className="group hover:bg-orange-500 p-2 rounded-md transition-colors duration-300 ease-in-out">
              <Link href={`/blogs/${id.ID}`} className="text-sm sm:text-base font-medium text-gray-300 hover:text-white hover:underline">
              {id.post_title}
          </Link>
        </li>
      ))}
    </div>
  </ul>
          </li>

        </ul>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-gray-800 shadow-lg flex flex-col text-lg text-white">
            <li className="px-4 py-2 border-b hover:bg-gray-700">
              <Link href="/Home">Home</Link>
            </li>
            <li className="px-4 py-2 border-b hover:bg-gray-700">
              <Link href="/services">Services</Link>
            </li>
            <li className="px-4 py-2 border-b hover:bg-gray-700">
              <Link href="/about-us/testimonials">About Us</Link>
            </li>
            <li className="px-4 py-2 border-b hover:bg-gray-700">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="px-4 py-2 border-b hover:bg-gray-700">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default HeaderMenu;

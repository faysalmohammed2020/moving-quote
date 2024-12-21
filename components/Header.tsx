"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

const HeaderMenu: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md  ">
      <nav className="container mx-auto flex items-center justify-between py-2 px-2">
        <div className="text-white text-xl font-bold">
          <Link href="/">
          <Image
          src="/image/logo-png.png"
          width= {200}
          alt="Moving Quote New York"
          height={200}
          />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-600"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        <ul className="hidden mx-auto md:flex items-center space-x-6 text-lg text-black">
        <li>
            <Link href="/Home">Home</Link>
          </li>
          <li className="group relative">
            <div className="flex items-center cursor-pointer">
              <span>Services</span>
              <ChevronDown className="ml-2 w-4 h-4 text-white-600 group-hover:text-white" />
            </div>
            <ul className="absolute left-0 mt-2 w-64 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-100 invisible h-48 overflow-y-auto">
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/long-distance-moving">
                  Long Distance Moving
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/auto-transport">Auto Transport</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/storage-solutions">
                  Storage Solutions
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/commercial-moving">
                  Commercial Moving
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/corporate-relocation">
                  Corporate Relocation
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/specialized-moving">
                  Specialized Moving
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/small-moves">Small Moves</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/services/moving-box">Moving Box</Link>
              </li>
            </ul>
          </li>

          <li className="group relative">
            <div className="flex items-center cursor-pointer">
              <span>About Us</span>
              <ChevronDown className="ml-2 w-4 h-4 text-black group-hover:text-gray-900" />
            </div>
            <ul className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 invisible">
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/about-us/testimonials">Testimonials</Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>

          <li className="group relative">
            <div className="flex items-center cursor-pointer">
              <span>Blog</span>
              <ChevronDown className="ml-2 w-4 h-4 text-black group-hover:text-gray-900" />
            </div>
            <ul className="absolute left-0 mt-2 w-32 bg-white text-black shadow-lg rounded-md opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 invisible h-48 overflow-y-auto">
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/blog/title-1">Title 1</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/blog/title-2">Title 2</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/blog/title-3">Title 3</Link>
              </li>
              <li className="px-4 py-2 hover:bg-blue-600">
                <Link href="/blog/title-4">Title 4</Link>
              </li>
            </ul>
          </li>
        </ul>

        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col text-lg md:hidden">
            <li className="px-4 py-2 border-b">
              <Link href="/services">Services</Link>
            </li>
            <li className="px-4 py-2 border-b">
              <Link href="/about-us/testimonials">About Us</Link>
            </li>
            <li className="px-4 py-2 border-b">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="px-4 py-2 border-b">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default HeaderMenu;

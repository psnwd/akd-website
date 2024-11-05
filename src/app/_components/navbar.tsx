"use client";

import * as React from "react";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import ContactForm from "./contact";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/20 bg-white/10 font-sans text-gray-800 backdrop-blur-md dark:text-white">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                className="h-10 w-10"
                src="/static/icons/icon-192x192.png"
                width={40}
                height={40}
                alt="Logo"
              />
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {["Home", "Events", "News"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`.replace(" ", "-")}
                    className="rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ease-in-out hover:bg-white/20 dark:hover:bg-gray-800/30"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSearch}
                className="mr-2 hover:bg-white/20 dark:hover:bg-gray-800/30"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>
              {/* <ThemeToggle /> */}
              <ContactForm />
            </div>
          </div>
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSearch}
              className="mr-2 hover:bg-white/20 dark:hover:bg-gray-800/30"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover:bg-white/20 dark:hover:bg-gray-800/30"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div className="absolute left-0 top-16 w-full bg-white/80 p-4 shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out dark:bg-gray-800/80">
          <div className="relative mx-auto max-w-md">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border-2 border-gray-300 py-2 pl-10 pr-4 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>
      )}

      {isMenuOpen && (
        <div className="bg-white/80 backdrop-blur-md dark:bg-gray-800/80 md:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
            {["Home", "Events", "News"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`.replace(" ", "-")}
                className="block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200 ease-in-out hover:bg-white/20 dark:hover:bg-gray-700/30"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="border-t border-gray-300 pb-3 pt-4 dark:border-gray-700">
            <div className="flex items-center px-5">
              {/* <ThemeToggle /> */}
              <Button className="w-full bg-blue-600 text-white transition-colors duration-200 ease-in-out hover:bg-blue-700">
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

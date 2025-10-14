"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { BUSINESS_INFO, NAVIGATION } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        isScrolled
          ? "sticky top-0 z-50 w-full transition-all duration-200 bg-white shadow-md"
          : "sticky top-0 z-50 w-full transition-all duration-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      }
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/mcnamara_construction_logo.jpg"
              alt="McNamara Construction & Design"
              width={180}
              height={60}
              className="h-10 w-auto md:h-12"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-green-700"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Phone */}
          <div className="hidden items-center gap-4 md:flex">
            <a
              href={"tel:" + BUSINESS_INFO.phoneRaw}
              className="text-sm font-medium text-gray-900 hover:text-green-700"
            >
              {BUSINESS_INFO.phone}
            </a>
            <Button asChild>
              <Link href="/contact">Free Consultation</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-md md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <nav className="flex flex-col gap-4">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base font-medium text-gray-700 hover:text-green-700"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={"tel:" + BUSINESS_INFO.phoneRaw}
                className="text-base font-medium text-gray-900 hover:text-green-700"
              >
                {BUSINESS_INFO.phone}
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}

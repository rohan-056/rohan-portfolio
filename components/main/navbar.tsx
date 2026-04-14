'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { LINKS, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001427] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        {/* Logo + Name */}
        <Link href="#about-me" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={70}
            height={70}
            draggable={false}
            className="cursor-pointer"
          />
          <div className="hidden md:flex font-bold ml-[10px] text-gray-300">Rohan Kumar</div>
        </Link>

        {/* Web Navbar */}
        <div className="hidden md:flex w-[600px] h-full flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border-[rgba(112,66,248,0.38)] bg-[rgba(3,0,20,0.37)] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>

        {/* Social Icons (Web) */}
        <div className="hidden md:flex flex-row gap-5 items-center">
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-6 w-6 text-white" />
            </Link>
          ))}
          <Link
            href="https://www.skills.google/public_profiles/90420150-5271-4205-aa9f-8cd1936d3e76"
            target="_blank"
            rel="noreferrer noopener"
            className="text-white text-xs font-semibold border border-[#7042f88b] px-2 py-1 rounded-full hover:bg-[#7042f820] transition"
          >
            Google Skills
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-white focus:outline-none text-4xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[65px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link href={link} target="_blank" rel="noreferrer noopener" key={name}>
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
            <Link
              href="https://www.skills.google/public_profiles/90420150-5271-4205-aa9f-8cd1936d3e76"
              target="_blank"
              rel="noreferrer noopener"
              className="text-white text-xs font-semibold border border-[#7042f88b] px-3 py-2 rounded-full"
            >
              Google Skills
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

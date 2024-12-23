"use client";
import { useState } from "react";
import Image from "next/image";

import { CloseIcon, HamburgerIcon } from "@/assets/icons";
import PrimaryButton from "../buttons/PrimaryButton";
import Container from "../UI/Container";
import logo from "@/assets/shared/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Features", href: "/" },
  { name: "Pricing", href: "/pricing" },
  { name: "Help", href: "/help" },
  { name: "Guide", href: "/guide" },
  { name: "Earn with Us", href: "#" },
  { name: "Contact Us", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <Container>
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex lg:flex-1">
            <Image alt="" src={logo} className="h-auto w-[90px]" />
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <HamburgerIcon />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-base font-medium hover:text-primary ${
                  item.href === pathname ? "text-primary" : " text-secondary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <PrimaryButton>Install for Free</PrimaryButton>
          </div>
        </nav>
      </Container>
      {/* Mobile menu */}
      <div
        className={`fixed px-6 inset-y-0 right-0 z-10 w-full max-w-sm bg-white   shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="-m-1.5 p-1.5">
            <Image alt="" src={logo} className="h-auto w-[90px]" />
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`-mx-3 block rounded-lg px-3 py-2 text-base font-medium text-secondary hover:text-primary *:
                     ${
                       item.href === pathname
                         ? "text-primary"
                         : " text-secondary"
                     }
                    `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <PrimaryButton>Install for Free</PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}

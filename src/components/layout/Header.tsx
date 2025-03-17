"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Cookies from "js-cookie";
import { CloseIcon, HamburgerIcon } from "@/assets/icons";
import PrimaryButton from "../buttons/PrimaryButton";
import Container from "../UI/Container";
import logo from "@/assets/shared/logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslation } from "react-i18next";
import Login from "../auth/Login";

export default function Header() {
  const pathname = usePathname();
  const { t } = useTranslation();

  const navigation = [
    { name: t("layout.header.features"), href: "/" },
    { name: t("layout.header.pricing"), href: "/pricing" },
    { name: t("layout.header.help"), href: "/help" },
    { name: t("layout.header.guide"), href: "/guide" },
    { name: t("layout.header.earnWithUs"), href: "#" },
    { name: t("layout.header.contactUs"), href: "/contact" },
  ];

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const accessToken = Cookies.get("access_token");
    const email = Cookies.get("user_email");
    if (accessToken && email) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  const handleLogout = () => {
    Cookies.remove("access_token");
    Cookies.remove("refresh_token");
    Cookies.remove("email");
    setIsLoggedIn(false);
  };

  return (
    <header className="bg-white">
      <Container>
        <nav className="flex items-center justify-between">
          <div className="flex">
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
          <div className="hidden lg:flex md:gap-x-8 xl:gap-x-12">
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
          <div className="hidden lg:flex gap-5 lg:justify-end items-center">
            <PrimaryButton>{t("layout.common.installforFree")}</PrimaryButton>
            {isLoggedIn ? (
              <PrimaryButton onClick={handleLogout}>Logout</PrimaryButton>
            ) : (
              <PrimaryButton onClick={() => setLoginModal(true)}>
                {t("layout.common.login")}
              </PrimaryButton>
            )}

            <ChangeLanguage />
          </div>
          {mobileMenuOpen && (
            <div className="w-full h-full bg-black opacity-30 fixed z-10 top-0 left-0" />
          )}
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
            <PrimaryButton extraCss="w-full">
              {t("layout.common.installforFree")}
            </PrimaryButton>
            {isLoggedIn ? (
              <PrimaryButton extraCss="w-full my-4" onClick={handleLogout}>
                Logout
              </PrimaryButton>
            ) : (
              <PrimaryButton
                extraCss="w-full my-4"
                onClick={() => setLoginModal(true)}
              >
                {t("layout.common.login")}
              </PrimaryButton>
            )}

            <ChangeLanguage />
          </div>

          <Login
            open={loginModal}
            setOpen={setLoginModal}
            setIsLoggedIn={setIsLoggedIn}
          />
        </div>
      </div>
    </header>
  );
}

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  return (
    <Menu
      as="div"
      className="relative block text-left  border-none mt-5 lg:mt-0"
    >
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-medium text-secondary shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          Language
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 lg:w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in w-full"
      >
        <div className="py-1">
          <MenuItem>
            <span
              onClick={() => i18n.changeLanguage("en")}
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              English
            </span>
          </MenuItem>
          <MenuItem>
            <span
              onClick={() => i18n.changeLanguage("ar")}
              className="block cursor-pointer px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
            >
              Arabic
            </span>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

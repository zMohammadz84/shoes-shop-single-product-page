import { Avatar } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import HeaderCart from "./HeaderCart";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

export const navItems: { title: string; href: string }[] = [
  {
    title: "Collections",
    href: "/",
  },
  {
    title: "Men",
    href: "/",
  },
  {
    title: "Women",
    href: "",
  },
  {
    title: "About",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];

const Header: FC = () => {
  return (
    <header className="shadow-sm lg:shadow-none sticky top-0 bg-white z-30">
      <div className="container lg:pt-0 lg:pb-0">
        <div className=" flex items-center w-full lg:border-b">
          {/* Nav Mobile */}
          <NavMobile />
          <div className="flex items-center ">
            <Link
              href="/"
              className="flex justify-center items-center lg:mr-10"
            >
              <Image
                className="w-32"
                src="/icons/logoCompany.svg"
                alt="logo"
                width={100}
                height={50}
                priority
              />
            </Link>
            {/* Nav */}
            <Nav />
          </div>
          <div className="flex justify-center items-center ml-auto gap-3.5 lg:gap-8">
            {/* Cart */}
            <HeaderCart />
            <Avatar
              className="ring-2 ring-transparent cursor-pointer hover:ring-custom-orange-color transition-all"
              src="/images/image-avatar.png"
              alt="profile image"
              size={40}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

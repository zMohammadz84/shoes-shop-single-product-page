"use client";
import Link from "next/link";
import { CSSProperties, FC, MouseEvent, useState } from "react";
import { navItems } from "./Header";


const Nav: FC = () => {
  const [indicatorStyle, setIndicatorStyle] = useState<
    Pick<CSSProperties, "left" | "width" | "height">
  >({
    left: 0,
    width: 0,
  });

  const handleMouseEnter = (e: MouseEvent<HTMLAnchorElement>) => {
    const { offsetLeft, offsetWidth } = e.currentTarget;
    setIndicatorStyle({ left: offsetLeft, width: offsetWidth, height: 4 });
  };

  return (
    <nav className="flex items-center relative">
      {navItems.map(({ href, title }, index) => (
        <Link
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() =>
            setIndicatorStyle((prev) => ({ ...prev, width: 0 }))
          }
          key={index}
          href={href}
          className="nav-items hidden lg:block font-medium text-gray-500 hover:text-black py-11 px-5"
        >
          {title}
        </Link>
      ))}
      <div
        style={indicatorStyle}
        className="bg-custom-orange-color absolute bottom-0 transition-all duration-300 pointer-events-none"
      ></div>
    </nav>
  );
};

export default Nav;

"use client";
import { Drawer } from "antd";
import React, { FC, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { navItems } from "./Header";
import Link from "next/link";

const NavMobile: FC = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <FiMenu
        size={30}
        className="mr-5 lg:hidden cursor-pointer"
        onClick={showDrawer}
      />
      <Drawer
        onClose={onClose}
        open={open}
        width={250}
        placement="left"
        classNames={{
          wrapper: "lg:hidden",
          mask: "lg:hidden",
        }}
      >
        <div className="flex flex-col ">
          {navItems.map(({ href, title }, index) => (
            <Link
              key={index}
              href={href}
              className="p-3 pl-0 text-lg hover:text-custom-orange-color transition-all"
            >
              {title}
            </Link>
          ))}
        </div>
      </Drawer>
    </>
  );
};

export default NavMobile;

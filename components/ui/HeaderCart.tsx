"use client";
import React, { FC, useRef } from "react";
import { PiShoppingCart } from "react-icons/pi";
import { Dropdown } from "antd";
import { useAppSelector } from "@/lib/hooks";
import CartItem from "./CartItem";
import CustomButton from "../modules/CustomButton";

const HeaderCart: FC = () => {
  const cartRef = useRef<HTMLDivElement>(null);
  const cart = useAppSelector((store) => store.cart);

  return (
    <div className="sm:relative" ref={cartRef}>
      <Dropdown
        trigger={["click"]}
        getPopupContainer={() => cartRef.current as HTMLElement}
        overlayClassName="!top-20 !left-3 !right-3 sm:!top-14 sm:!-right-20 sm:!left-auto sm:w-80 lg::w-96"
        dropdownRender={() => (
          <div className=" bg-white rounded-lg shadow-xl border">
            <div className="p-5 border-b text-lg">Cart</div>
            {cart.length > 0 ? (
              <div className="p-5">
                <div className="flex flex-col gap-5 max-h-44 overflow-auto">
                  {cart.map((product) => (
                    <CartItem key={product.id} {...product} />
                  ))}
                </div>
                <CustomButton className="mt-6 shadow-none text-base">
                  Checkout
                </CustomButton>
              </div>
            ) : (
              <div className="h-56 flex justify-center items-center text-lg">
                <p className="text-gray-400">Your cart is empty !</p>
              </div>
            )}
          </div>
        )}
      >
        <button className="flex justify-center items-center relative">
          <span className="absolute -top-1 -right-1 size-5 bg-custom-pale-orange-color text-custom-orange-color rounded-full flex justify-center items-center text-sm ">
            {cart.length}
          </span>
          <PiShoppingCart size={30} className="cursor-pointer" />
        </button>
      </Dropdown>
    </div>
  );
};

export default HeaderCart;

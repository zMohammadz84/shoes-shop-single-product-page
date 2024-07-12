"use client";
import {
  decreaseProduct,
  increaseProduct,
} from "@/lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Minus from "@/public/icons/Minus";
import Plus from "@/public/icons/Plus";
import { ShoesType } from "@/types/ProductType";
import { cn } from "@/utils/cn";
import { Button } from "antd";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { PiShoppingCart } from "react-icons/pi";
import CustomButton from "../modules/CustomButton";

type AddToCartPropsType = {
  product: ShoesType;
};

const AddToCart: FC<AddToCartPropsType> = ({ product }) => {
  const cartProduct = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const isIn = cartProduct.find((productCart) => productCart.id === product.id);

  const increaseProductHanler = () => {
    dispatch(increaseProduct(product));
    toast.success("Add to cart");
  };

  const decreaseProductHanler = () => {
    dispatch(decreaseProduct(product.id));
    toast.success("Removed from cart");
  };

  return (
    <>
      <div className="flex items-center w-full rounded-lg bg-slate-100 lg:w-64">
        <button
          className="flex items-center justify-center py-7 px-10 lg:px-5 lg:py-5 disabled:opacity-25"
          aria-label="decrement -product-button"
          onClick={decreaseProductHanler}
          disabled={!isIn}
        >
          <Minus />
        </button>
        <span className="flex-1 flex justify-center items-center text-lg">
          {isIn?.count || 0}
        </span>
        <button
          className="flex items-center justify-center py-7 px-10 lg:px-5 lg:py-5"
          aria-label="increment-product-button"
          onClick={increaseProductHanler}
        >
          <Plus />
        </button>
      </div>
      <CustomButton
        disabled={!!isIn}
        onClick={increaseProductHanler}
        className={cn([
          isIn &&
            "bg-white ring-2 ring-custom-orange-color text-black shadow-custom-pale-orange-color hover:bg-white",
        ])}
      >
        {isIn ? (
          <span>In your cart 😁</span>
        ) : (
          <div className="flex justify-center items-center gap-5">
            <PiShoppingCart size={20} className="cursor-pointer " />
            <span>Add to cart</span>
          </div>
        )}
      </CustomButton>
    </>
  );
};

export default AddToCart;

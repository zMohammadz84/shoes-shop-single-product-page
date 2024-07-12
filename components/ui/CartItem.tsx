import { deleteProduct } from "@/lib/features/cart/cartSlice";
import { useAppDispatch } from "@/lib/hooks";
import { CartItemType } from "@/types/CartItemType";
import { convertToDollor } from "@/utils/convertToDollor";
import discountCalculate from "@/utils/discountCalculate";
import Image from "next/image";
import React, { FC } from "react";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

type CartItemPropsType = CartItemType;

const CartItem: FC<CartItemPropsType> = ({
  count,
  price,
  discount,
  name,
  thumbnailImages,
  id,
}) => {
  const dispatch = useAppDispatch();

  const deleteProductHandler = () => {
    dispatch(deleteProduct(id));
    toast.success("Product removed");
  };

  return (
    <div className="flex items-center justify-between">
      <Image
        src={`/images/${thumbnailImages[0]}`}
        alt="product image"
        width={50}
        height={50}
        className="rounded-sm w-11"
      />
      <div>
        <p className="font-medium text-gray-500">{name}</p>
        <div className="flex items-center gap-4">
          <span className="font-medium text-gray-500">
            ${discountCalculate(price, discount)} x {count}
          </span>
          <span className="font-extrabold">
            ${convertToDollor(+discountCalculate(price, discount) * count)}
          </span>
        </div>
      </div>
      <button
        aria-label="remove product from cart Button"
        onClick={deleteProductHandler}
      >
        <BiTrash size={20} />
      </button>
    </div>
  );
};

export default CartItem;

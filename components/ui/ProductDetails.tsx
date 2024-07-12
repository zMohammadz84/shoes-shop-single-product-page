import { FC } from "react";
import AddToCart from "./AddToCart";
import { ShoesType } from "@/types/ProductType";
import discountCalculate from "@/utils/discountCalculate";
import { convertToDollor } from "@/utils/convertToDollor";

type ProductDetailsPropsType = {
  product: ShoesType;
};

const ProductDetails: FC<ProductDetailsPropsType> = ({ product }) => {
  const { company, desc, discount, name, price } = product;

  return (
    <div className="p-5 md:px-0 lg:py-12 lg:pr-0 lg:px-14 xl:py-4 2xl:py-12 ">
      <p className="uppercase text-custom-orange-color text-sm">{company}</p>
      <h1 className="text-3xl mt-2.5 lg:text-5xl lg:mt-5">{name}</h1>
      <p className="text-gray-500 font-medium mt-3.5 lg:mt-7">{desc}</p>
      <div className="flex items-center justify-between mt-5 lg:flex-col lg:items-start lg:gap-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl">
            ${discountCalculate(price, discount)}
          </span>
          <span className="bg-custom-pale-orange-color text-custom-orange-color rounded-lg py-0.5 px-2">
            {discount}%
          </span>
        </div>
        <span className="text-gray-400 line-through">
          ${convertToDollor(price)}
        </span>
      </div>
      <div className="flex flex-col mt-10 gap-5 lg:flex-row lg:items-center">
        <AddToCart product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;

import { convertToDollor } from "./convertToDollor";

export default function discountCalculate(price: number, discount: number) {
  const finalPrice = convertToDollor((price * discount) / 100);
  return finalPrice;
}

import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "@/lib/features/cart/cartSlice";

export const Store = () => {
  return configureStore({
    reducer: {
      cart: CartReducer,
    },
  });
};

export type AppStore = ReturnType<typeof Store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

import { CartItemType } from "@/types/CartItemType";
import { ShoesType } from "@/types/ProductType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CartItemType[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increaseProduct: (state, { payload }: { payload: ShoesType }) => {
      const index = state.findIndex((product) => product.id === payload.id);
      if (index === -1) return [...state, { count: 1, ...payload }];
      state[index].count += 1;
      return state;
    },
    decreaseProduct: (state, { payload }: { payload: number }) => {
      const index = state.findIndex((product) => product.id === payload);
      if (state[index].count <= 1) {
        state.splice(index, 1);
        return state;
      } else {
        state[index].count -= 1;
        return state;
      }
    },
    deleteProduct: (state, { payload }: { payload: number }) => {
      const index = state.findIndex((product) => product.id === payload);
      state.splice(index, 1);
      return state;
    },
  },
});

export const { decreaseProduct, increaseProduct, deleteProduct } =
  cartSlice.actions;
export default cartSlice.reducer;

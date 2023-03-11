const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItem: [],
  totalPrice: 0,
  numberOfItems: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isItem = state.cartItem.some((d) => d.id === action.payload.id);
      console.log(isItem);
      if (isItem) {
        const item = state.cartItem.map((d) => {
          if (d.id === action.payload.id) {
            console.log("hello");
            console.log(d.id === action.payload.id);
            console.log(d.id, action.payload.id);
            return { ...d, quantity: parseInt(d.quantity) + 1 };
          } else {
            console.log("hi");
            console.log(d.id === action.payload.id);
            console.log(d.id, action.payload.id);
            return {
              ...d,
            };
          }
        });
        return {
          ...state,
          cartItem: [...item],
          numberOfItems: [...item].length,
        };
      }
      return {
        ...state,
        cartItem: [...state.cartItem, { ...action.payload, quantity: 1 }],
        numberOfItems: [...state.cartItem, { ...action.payload, quantity: 1 }]
          .length,
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItem: state.cartItem.filter((d) => d.id !== action.payload.id),
        numberOfItems: state.cartItem.filter((d) => d.id !== action.payload.id)
          .length,
      };
    },
    decrement: (state, action) => {
      const item = state.cartItem.map((d) => {
        if (d.id === action.payload.id) {
          console.log("hello");
          console.log(d.id === action.payload.id);
          console.log(d.id, action.payload.id);
          if (parseInt(d.quantity) - 1 === 0) {
            return null;
          }
          return { ...d, quantity: parseInt(d.quantity) - 1 };
        } else {
          console.log("hi");
          console.log(d.id === action.payload.id);
          console.log(d.id, action.payload.id);
          return {
            ...d,
          };
        }
      });
      return {
        ...state,
        cartItem: [...item].filter((d) => d !== null),
        numberOfItems: [...item].filter((d) => d !== null).length,
      };
    },
  },
});

export const { addToCart, removeFromCart, decrement } = cartSlice.actions;
const cartReducer = cartSlice.reducer;
export default cartReducer;

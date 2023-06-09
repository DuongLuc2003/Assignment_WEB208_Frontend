import { createReducer, on } from '@ngrx/store';
import { ICart } from 'src/app/interfaces';
import {
  addCart,
  addPrdCart,
  loadCart,
  removeCart,
  removePrdCart,
  updateCart,
} from './cart.action';

const initialState: { cart: ICart[]; loading: boolean; error: any } = {
  cart: [],
  loading: false,
  error: null,
};

export const cartReducer = createReducer(
  initialState,

  on(loadCart, (state) => {
    const data = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : state.cart;

    return {
      ...state,
      cart: data.cart,
      loading: false,
      error: null,
    };
  }),

  on(addCart, (state, { cart }) => {
    if (state.cart.some((prd) => prd._id === cart._id)) {
      const newCart = state.cart.map((prd) =>
        prd._id === cart._id ? { ...prd, sl: prd.sl + 1 } : prd
      );
      const newState = {
        ...state,
        cart: newCart,
      };
      localStorage.setItem('cart', JSON.stringify(newState));

      return newState;
    }
    const newState = {
      ...state,
      cart: [...state.cart, cart],
    };
    localStorage.setItem('cart', JSON.stringify(newState));

    console.log('object');
    return newState;

    // Lưu trạng thái vào localStorage
  }),

  on(removePrdCart, (state, { id }) => {
    const newCart = state.cart.map((prd) =>
      prd._id === id ? { ...prd, sl: prd.sl - 1 < 1 ? 1 : prd.sl - 1 } : prd
    );
    const newState = {
      ...state,
      cart: newCart,
    };
    localStorage.setItem('cart', JSON.stringify(newState));

    return newState;
  }),
  on(addPrdCart, (state, { id }) => {
    const newCart = state.cart.map((prd) =>
      prd._id === id ? { ...prd, sl: prd.sl + 1 } : prd
    );
    const newState = {
      ...state,
      cart: newCart,
    };
    localStorage.setItem('cart', JSON.stringify(newState));

    return newState;
  }),
  on(updateCart, (state, { id, sl }) => {
    const newCart = state.cart.map((prd) => {
      if (prd._id === id) {
        return { ...prd, sl: sl < 1 ? 1 : sl };
      }
      return prd;
    });
    const newState = {
      ...state,
      cart: newCart,
    };
    localStorage.setItem('cart', JSON.stringify(newState));

    return newState;
  }),
  on(removeCart, (state, { id }) => {
    const newCart = state.cart.filter((prd) => prd._id !== id);
    const newState = {
      ...state,
      cart: newCart,
    };

    // Lưu trạng thái vào localStorage
    localStorage.setItem('cart', JSON.stringify(newState));

    return newState;
  })
);

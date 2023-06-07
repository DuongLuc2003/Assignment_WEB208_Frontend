import { IProduct } from 'src/app/interfaces/product';
import { addCart, loadCartSuccess } from './cart.action';
import { createReducer, on } from '@ngrx/store';

const initialState: { cart: IProduct[]; loading: boolean; error: any } = {
  cart: [],
  loading: false,
  error: null,
};

export const cartReducer = createReducer(
  initialState,
  on(loadCartSuccess, (state) => {
    const cart = localStorage.getItem('cart')
      ? JSON.parse(localStorage.getItem('cart')!)
      : state.cart;

    return {
      ...state,
      cart,
      loading: false,
      error: null,
    };
  }),
  on(addCart, (state, { cart }) => {
    console.log('object', cart);
    const newState = {
      ...state,
      cart: [...state.cart, cart],
    };

    // Lưu trạng thái vào localStorage
    localStorage.setItem('cart', JSON.stringify(newState));

    return newState;
  })
);

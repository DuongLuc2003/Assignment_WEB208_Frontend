import { createReducer, on } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';
import { loadProductsSuccess } from './product.actions';

export interface UserState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

export const initialState: UserState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = createReducer(
  initialState,
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
    error: null,
  }))
);

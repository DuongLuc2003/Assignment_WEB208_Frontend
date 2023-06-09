import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';

export const loadCart = createAction('[Cart] Load Cart');

type ICart = IProduct & { sl: number };
// Action tải danh sách sản phẩm thành công
export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cart: ICart[] }>()
);

export const updateCart = createAction(
  '[Cart] Update Product To Cart',
  props<{ id: number; sl: number }>()
);

export const addCart = createAction(
  '[Cart] Add Product To Cart',
  props<{ cart: ICart }>()
);
export const addPrdCart = createAction(
  '[Cart] Increment Product To Cart',
  props<{ id: number }>()
);
export const removePrdCart = createAction(
  '[Cart] decrement Product To Cart',
  props<{ id: number }>()
);

export const removeCart = createAction(
  '[Cart] Remove Product To Cart',
  props<{ id: number }>()
);

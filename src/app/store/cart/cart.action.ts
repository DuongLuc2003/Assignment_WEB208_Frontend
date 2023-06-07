import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';

export const loadCart = createAction('[Cart] Load Cart');

// Action tải danh sách sản phẩm thành công
export const loadCartSuccess = createAction(
  '[Cart] Load Cart Success',
  props<{ cart: IProduct[] }>()
);

export const addCart = createAction(
  '[Cart] Add Product To Cart',
  props<{ cart: IProduct }>()
);

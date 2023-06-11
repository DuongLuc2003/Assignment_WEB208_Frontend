import { createAction, props } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';

// Action tải danh sách sản phẩm
export const loadProducts = createAction('[Product] Load Products');

// Action tải danh sách sản phẩm thành công
export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ products: IProduct[] }>()
);

// Action tải danh sách sản phẩm thất bại
export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: string }>()
);

// Action thêm sản phẩm
export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: IProduct }>()
);

// Action sửa thông tin sản phẩm
export const editProduct = createAction(
  '[Product] Edit Product',
  props<{ id: string; product: IProduct }>()
);

// Action xóa sản phẩm
export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: string }>()
);

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import { ProductService } from 'src/app/services/product.service';

import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
  addProduct,
  editProduct,
  deleteProduct,
} from './product.actions';

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadProducts), // Lắng nghe action loadProducts
    mergeMap(() =>
      this.productService.getProducts().pipe( // Gọi phương thức API từ ProductService
        map(products => loadProductsSuccess({ products: products.data })), // Dispatch action loadProductsSuccess với dữ liệu sản phẩm
        catchError(error => of(loadProductsFailure({ error: error.message }))) // Xử lý lỗi và dispatch action loadProductsFailure
      )
    )
  )
);


}

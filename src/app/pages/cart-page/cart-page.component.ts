import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';
import { addCart, loadCart } from 'src/app/store/cart/cart.action';
import { loadProducts } from 'src/app/store/product/product.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  constructor(private store: Store<any>) {}

  carts = [];

  ngOnInit() {
    this.store.dispatch(loadCart());

    this.store
      .select((state) => state.cart)
      .subscribe((data) => {
        this.carts = data.cart;
      });
  }

  test() {}
}

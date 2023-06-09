import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ICart } from 'src/app/interfaces';
import { IProduct } from 'src/app/interfaces/product';
import {
  addCart,
  addPrdCart,
  loadCart,
  removeCart,
  removePrdCart,
  updateCart,
} from 'src/app/store/cart/cart.action';
import { loadProducts } from 'src/app/store/product/product.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  constructor(private store: Store<any>, private toast: ToastrService) {}

  cart: ICart[] = [];

  selectAll = false;

  selectedItems: ICart[] = [];

  ngOnInit() {
    this.store
      .select((state) => state.cart)
      .subscribe((data) => {
        this.cart = data.cart;
      });
  }
  selectAllItems() {
    if (this.selectAll) {
      this.selectedItems = [...this.cart];
    } else {
      this.selectedItems = [];
    }
  }

  toggleItemSelection(item: ICart) {
    if (this.isSelected(item)) {
      this.selectedItems = this.selectedItems.filter(
        (selectedItem) => selectedItem !== item
      );
    } else {
      this.selectedItems = [...this.selectedItems, item];
    }
    this.updateSelectAll();
  }

  isSelected(item: ICart): boolean {
    return this.selectedItems.includes(item);
  }

  updateSelectAll() {
    this.selectAll = this.selectedItems.length === this.cart.length;
  }

  handleRemoveCart(id: number | undefined) {
    const isCofirm = confirm('Mày muốn xóa à !!');
    if (id && isCofirm) {
      this.store.dispatch(removeCart({ id }));
      this.selectedItems = this.selectedItems.filter((item) => item._id !== id);
      this.toast.success('Xóa sản phẩm giỏ hàng thành công');
    }
  }

  handleTotalCart() {
    const total = this.selectedItems.reduce(
      (pre, current) => pre + current.sl * current.price!,
      0
    );
    return total;
  }

  handleUpdateCart(id: number, e: Event) {
    const target = e.target as HTMLInputElement;
    const value = target.value;
    this.store.dispatch(updateCart({ id, sl: +value }));
  }
  handleDecrementCart(id: number) {
    this.store.dispatch(removePrdCart({ id }));
  }
  handleIncrementCart(id: number) {
    this.store.dispatch(addPrdCart({ id }));
  }
}

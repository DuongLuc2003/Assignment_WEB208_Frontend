import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadCart } from 'src/app/store/cart/cart.action';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
})
export class DefaultLayoutComponent implements OnInit {
  constructor(private store: Store<any>) {}

  totalCart: number = 0;

  ngOnInit() {
    this.store.dispatch(loadCart());

    this.store
      .select((state) => state.cart)
      .subscribe((data) => {
        this.totalCart = data.cart.length;
      });
  }
}

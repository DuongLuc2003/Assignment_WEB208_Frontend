import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { addCart } from 'src/app/store/cart/cart.action';
@Component({
  selector: 'app-detail-product-page',
  templateUrl: './detail-product-page.component.html',
  styleUrls: ['./detail-product-page.component.scss'],
})
export class DetailProductPageComponent implements OnInit {
  product!: IProduct;
  baseUrl: any;
  images: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<any>
  ) {
    // this.route.paramMap.subscribe((params => {
    //   const id = Number(params.get('id'));
    //   this.productService.getProduct(id).subscribe(data => {
    //     this.product = data;
    //   },error => console.log(error.message))
    // }))
  }
  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');

    this.productService.getProduct(productId).subscribe(
      (response: any) => {
        this.product = response.data;
        this.images = response.data.images;
        // if (images && images.length > 0) {
        //   this.baseUrl = images[0].base_url;
        // }
      },
      (error: any) => {
        console.error(error);
      }
    );
    // this.getProduct(productId);

    // this.productService.getProduct(productId).subscribe(
    //   (response: any) => {
    //     const images = response.images;
    //     if (images && images.length > 0) {
    //       this.baseUrl = images[0].base_url;
    //     }
    //   },
    //   (error: any) => {
    //     console.error(error);
    //   }
    // );
  }
  // getProduct(productId: any) {
  //   this.productService.getProduct(productId).subscribe(
  //     (response: any) => {
  //       this.product = response;
  //     },
  //     (error: any) => {
  //       console.error(error);
  //     }
  //   );
  // }

  handleAddCart() {
    this.store.dispatch(
      addCart({
        cart: {
          name: 'sản phẩm 1',
          price: 2,
          original_price: 3,
          avatar: '',
          categoryId: 1,
          description: 'a',
          images: [],
          slug: '',
          _id: 11,
        },
      })
    );
  }
}

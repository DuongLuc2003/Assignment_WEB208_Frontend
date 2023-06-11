import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { ICart } from 'src/app/interfaces';
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
  slug: any;
  
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private store: Store<any>,
    private toastor: ToastrService
  ) {
    // this.route.paramMap.subscribe((params => {
    //   const id = Number(params.get('id'));
    //   this.productService.getProduct(id).subscribe(data => {
    //     this.product = data;
    //   },error => console.log(error.message))
    // }))
  }
  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.slug = params.get('slug');
      this.getProductBySlug(this.slug);
    });
  }
  getProductBySlug(slug: string) {
    this.productService.getProduct(slug).subscribe(
      (response: any) => {
        this.product = response.data;
        this.images = response.data.images.map((image: any) => image.base_url)
        console.log(response)
      },
      (error) => {
        console.error(error);
      }
    );
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
    if (this.product) {
      this.store.dispatch(
        addCart({ cart: { ...this.product, sl: 1 } as ICart })
      );
      this.toastor.success('Thêm sản phẩm vô giỏ hàng thành công');
    }
  }
}

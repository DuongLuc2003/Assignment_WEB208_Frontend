import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-detail-product-page',
  templateUrl: './detail-product-page.component.html',
  styleUrls: ['./detail-product-page.component.scss']
})
export class DetailProductPageComponent implements OnInit{
  product!: IProduct;
  baseUrl: any;
  images: any;
  slug: any
  constructor(private route: ActivatedRoute, private productService: ProductService){
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
      },
      (error) => {
        console.error(error);
      }
    );
  }
  }
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


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
  productId!: IProduct;
  constructor(private route: ActivatedRoute, private productService: ProductService){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });
  }
}

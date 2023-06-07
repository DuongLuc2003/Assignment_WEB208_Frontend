import { Component} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent{
 status: boolean = false;
 productName = "";
 products: IProduct[] =[]
 product!: IProduct;
  
//  constructor(private productService: ProductService) { 
//   this.productService.getProducts().subscribe(data => {
//     this.products = data
//   },error => console.log(error))
//  }
 




}

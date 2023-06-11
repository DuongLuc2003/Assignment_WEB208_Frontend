import { Component, Pipe } from '@angular/core';

import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-management-product',
  templateUrl: './management-product.component.html',
  styleUrls: ['./management-product.component.scss']
})
export class ManagementProductComponent {
  products!: IProduct[];

  constructor(private ProductService: ProductService) {
    
    this.ProductService.getProducts().subscribe((data) => {

      this.products = data.data


    })
  }

  removeItem(id: number) {
    this.ProductService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(item => item._id !== id)
    }, (error) => {
      console.log(error.message)
    })
  }
}

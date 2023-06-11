
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})

export class ProductAddComponent{

  constructor(private ProductService: ProductService,
    private fb: FormBuilder,
    private router: Router){

  }
  
  addProduct = this.fb.group({
    name: [''],
    price: [0],
    // slug: [''],
    original_price: [0],
    description: [''],
    avatar: this.fb.group({
       base_url: [''],
    }),
    categoryId: ['']
  })

  onHandleAdd(){
    const productData: any = this.addProduct.value;
    this.ProductService.addProduct(productData).subscribe((data)=>{
      this.router.navigate(['/admin']);
    });
  }

   
}

import { IProduct } from 'src/app/interfaces/product';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss'],
})
export class ProductEditComponent implements OnInit {
  constructor(
    private ProductService: ProductService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // this.productForm.setControl=
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      this.ProductService.getProductById(id as string).subscribe((data) => {
        this.productForm.patchValue({ ...data.data, id: data.data._id });
      });
    });
  }

  productForm = this.fb.group({
    id: [0],
    name: [''],
    price: [0],
    // slug: [''],
    original_price: [0],
    description: [''],
    avatar: this.fb.group({
      base_url: [''],
    }),
    categoryId: [''],
  });

  onHandleUpdate() {
    const productData = this.productForm.value;
    if (this.productForm.valid) {
      this.ProductService.updateProduct(productData as IProduct).subscribe(
        (data) => {
          this.router.navigate(['/admin']);
        }
      );
    }
  }
}

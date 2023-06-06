import { Component , OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import { ICategory } from 'src/app/interfaces/categories';
import { CategoriesService } from 'src/app/services/categories.service';
@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit{
  products: IProduct[]= [];
  categories:ICategory[]=[];
  filteredProducts:IProduct[]=[];
  
  constructor(private productService: ProductService, private router: Router, private categoryService: CategoriesService) {}

  ngOnInit() {
    this.getProducts();
    this.loadAllProducts();
    this.loadCategories();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response.data;
        console.log(response)
      },
      (error) => {
        console.log(error);
      }
    );
  } 

  loadAllProducts() {
    this.productService.getProducts()
      .subscribe(response => this.filteredProducts = response.data);
  }
 
  loadCategories() {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories.datas);
  }
  
  filterByCategory(event: any) {
    const categoryId = event.target.value;
    if (categoryId) {
      this.productService.getProductsByCategory(categoryId)
        .subscribe(products => this.filteredProducts = products.data);
    } else {
      this.loadAllProducts();
    }
  }
  
  goToProductDetail(productId: number | undefined) {
    if (productId !== undefined) {
      this.router.navigate(['/products', productId]);
    }
  }
 
}

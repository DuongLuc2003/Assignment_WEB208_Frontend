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
  selectedCategory: any;
  searchKeyword: string = '';
  searchResults: IProduct[] = [];
  
  constructor(private productService: ProductService, private router: Router, private categoryService: CategoriesService) {}

  ngOnInit() {
    this.getProducts();
    this.loadAllProducts();
    this.loadCategories();
    this.selectedCategory = "all";
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (response) => {
        this.products = response.data;
        this.filteredProducts = this.products;
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
  filterProducts() {
    if (this.selectedCategory) {
      this.filteredProducts = this.products.filter(product => product.categoryId === this.selectedCategory);
    } else {
      this.filteredProducts = this.products;
  }
  
  }
  showAllProducts() {
    this.filteredProducts = this.products;
  }
  
    // if (this.searchKeyword) {
    //   this.filteredProducts = this.products.filter(
    //     product => product.name && product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
    //   );
    // } else {
    //   this.filteredProducts = this.products;}


  searchProducts() {
    if (this.searchKeyword) {
      this.filteredProducts = this.products.filter(
        product => product.name && product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }


  // searchProducts() {
  //   if (this.searchKeyword.trim() !== '') {
  //     this.productService.searchProducts(this.searchKeyword)
  //       .subscribe(products => this.searchResults = products.data);
  //   } else {
  //     this.loadAllProducts();
  //   }
  // }
  
  goToProductDetail(slug: string | undefined) {
    if (slug !== undefined) {
      this.router.navigate(['/products', slug]);
    }
  }
 
}

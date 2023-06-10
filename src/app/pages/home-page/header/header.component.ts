import { Component , OnInit} from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  products: IProduct[]= [];
  filteredProducts:IProduct[]=[];
  searchKeyword: string = '';
  searchResults: IProduct[] = [];

  ngOnInit() {
    
  }
  searchProducts() {
    if (this.searchKeyword) {
      this.filteredProducts = this.products.filter(
        product => product.name && product.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
      );
    } else {
      this.filteredProducts = this.products;
    }
  }

}
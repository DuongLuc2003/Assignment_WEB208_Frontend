import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { 

  }

  private API_Url = 'http://localhost:8000/api/products'
  

  
  getProducts(): Observable<{data:IProduct[]}> {
    return this.http.get<{data:IProduct[]}>(this.API_Url);
}
getProduct(id:any ):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.API_Url}/` + id);
}
deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_Url}/` + id);
}
addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_Url}/`, product);
}
updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API_Url}/${product.id}`,product);
}

}
//   {
//    id: 1,
//    name: 'banhmithit',
//    price: 15000,
//    original_price: 25000 ,
//    description: 'thit,ca chua,rauthom,pate,sucsich ',
//    avatar: '/assets/images/foods/banhmithit.jpg',
//    image:  '/assets/images/foods/banhmithit.jpg',
//    slug:  '',
//    categoryId: 1 
//   },
//   {
//    id: 2,
//    name: 'banhmipate',
//    price: 15000,
//    original_price: 25000 ,
//    description: 'thit,ca chua,rauthom,pate,sucsich ',
//    avatar: '/assets/images/foods/banhmipate.jpg',
//    image:  '/assets/images/foods/banhmipate.jpg',
//    slug:  '',
//    categoryId: 1 
//   },
//   {
//    id: 3,
//    name: 'banhmitrung',
//    price: 15000,
//    original_price: 25000 ,
//    description: 'thit,ca chua,rauthom,pate,trung',
//    avatar: '/assets/images/foods/banhmitrung.jpg',
//    image:  '/assets/images/foods/banhmitrung.jpg',
//    slug:  '',
//    categoryId: 1 
//   },
//   {
//    id: 4,
//    name: 'garan',
//    price: 10000,
//    original_price: 20000 ,
//    description: 'ga,botchien ',
//    avatar: '/assets/images/foods/garan.jpg',
//    image:  '/assets/images/foods/garan.jpg',
//    slug:  '',
//    categoryId: 2
//   },
//   {
//    id: 5,
//    name: 'hamburgerga',
//    price: 20000,
//    original_price: 30000 ,
//    description: 'banhmi,thitga,rauthom,cachua ',
//    avatar: '/assets/images/foods/hamburgerga.jpg',
//    image:  '/assets/images/foods/hamburgerga.jpg',
//    slug:  '',
//    categoryId: 3 
//   },
//   {
//    id: 6,
//    name: 'banhmithit',
//    price: 20000,
//    original_price: 30000 ,
//    description: ' banhmi,thitnuong,rauthom,cachua',
//    avatar: '/assets/images/foods/hamburgerthit.jpg',
//    image:  '/assets/images/foods/hamburgerthit.jpg',
//    slug:  '',
//    categoryId: 3
//   },
//   {
//    id: 7,
//    name: 'pizza',
//    price: 25000,
//    original_price: 35000 ,
//    description: ' banhmi,cachua,sucsich,thit,phomai',
//    avatar: '/assets/images/foods/pizza.jpg',
//    image:  '/assets/images/foods/pizza.jpg',
//    slug:  '',
//    categoryId: 4
//   }
//  ]


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';
import { ICategory } from '../interfaces/categories';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  private API_Url = 'http://localhost:8000/api';

  getProducts(): Observable<{ data: IProduct[] }> {
    return this.http.get<{ data: IProduct[] }>(`${this.API_Url}/products`);
  }
  getProduct(slug: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API_Url}/products/${slug}`);
  }
  getProductById(id: string): Observable<{ data: IProduct }> {
    return this.http.get<{ data: IProduct }>(`${this.API_Url}/product/${id}`);
  }
  deleteProduct(id: number | string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API_Url}/products/` + id);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(`${this.API_Url}/products`, product);
  }
  updateProduct(data: any): Observable<IProduct> {
    const { id, ...product } = data;
    return this.http.put<IProduct>(`${this.API_Url}/products/${id}`, product);
  }

  getProductsByCategory(categoryId: string): Observable<{ data: IProduct[] }> {
    return this.http.get<{ data: IProduct[] }>(
      `${this.API_Url}?categoryId=${categoryId}`
    );
  }
  // searchProducts(keyword: string):  Observable<{data:IProduct[]}> {
  //   return this.http.get<{data:IProduct[]}>(`${this.API_Url}/products?search=${keyword}`);
  // }
}

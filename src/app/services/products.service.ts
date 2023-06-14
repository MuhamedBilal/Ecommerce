import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { Product } from '../../models/productinterface'; 

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get('https://dummyjson.com/products');
  }

  getProduct(id: string) {
    return this.http.get(`https://dummyjson.com/products/${id}`);
  }
}
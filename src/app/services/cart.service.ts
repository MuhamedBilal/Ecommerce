import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: { product: any; quantity: number; totalPrice: number }[] = [];

  addToCart(product: any) {
   
    const item = this.cart.find(item => item.product.id === product.id);
    if (item) {
      item.quantity++;
      item.totalPrice = item.quantity * product.price;
    } else {
      this.cart.push({
        product,
        quantity: 1,
        totalPrice: product.price
      });
    }
  }
}

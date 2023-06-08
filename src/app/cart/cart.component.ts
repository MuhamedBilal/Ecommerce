import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  products: any[] = [];
  constructor(public CartService: CartService) {}

  changeQuantity(item: any, change: number) {
    item.quantity += change;
    item.totalPrice = item.quantity * item.product.price;
    if (item.quantity === 0) {
      this.deleteItem(item);
    }
  }

  deleteItem(item: any) {
    const index = this.CartService.cart.indexOf(item);
    this.CartService.cart.splice(index, 1);
  }

  getTotalPrice() {
    return this.CartService.cart.reduce((total, item) => total + item.totalPrice, 0);
  }
}


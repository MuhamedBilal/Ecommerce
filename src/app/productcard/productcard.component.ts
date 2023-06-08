import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.css']
})
export class ProductcardComponent {
  @Input() product: any;
  
  constructor(private router: Router, private CartService: CartService) {}
  

  addToCart(event: Event, product: any) { 
    event.stopPropagation();
    this.CartService.addToCart(this.product);
    // this.addToCartEvent.emit(this.product);
  }

  showDetails() {
    this.router.navigate(['/product', this.product.id]);
  }
}
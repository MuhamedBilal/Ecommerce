import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'appproduct-details',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  @ViewChild('slideBtn', { static: false }) slideBtn!: ElementRef;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private ProductsService: ProductsService,
    private CartService: CartService,
    

    ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.ProductsService.getProduct(id).subscribe(data => {
        this.product = data;
      });
  }
}
addToCart(product: any) { 
  this.CartService.addToCart(product);

}
}

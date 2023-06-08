import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Product } from 'src/models/productinterface';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})

export class ProductlistComponent implements OnInit {
  products: any
  constructor(
    private ProductsService: ProductsService,
   
    ) {
  }

  ngOnInit() {
    this.ProductsService.getProducts().
        subscribe({
          next: (data) => {
            this.products = data;
            // this.cart = this.user.cart
          },
          error: (err) => {
            console.log(err)
          }
        })
    };

}



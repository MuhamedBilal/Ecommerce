import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { authGuard } from './guards/auth.guard';
import {ProductlistComponent} from './productlist/productlist.component';
import {NotfoundComponent } from './shared/notfound/notfound.component'


const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  { path: 'products', component: ProductlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'product/:id', component: ProductdetailsComponent },
  { path: 'cart', component: CartComponent, canActivate: [authGuard]},
  { path: '**', component: NotfoundComponent },
  
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}

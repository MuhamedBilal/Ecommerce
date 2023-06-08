import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NotfoundComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent, 
    NotfoundComponent
  ]
})
export class SharedModule { }

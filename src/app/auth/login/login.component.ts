
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService){}
  
  email: string = '';
  password: string = '';
  errorMessage: string = '';

onSubmit(form: any) {
  // Retrieve data from local storage
  const userData = localStorage.getItem('registeredData');
  if (userData) {
    const user = JSON.parse(userData);
    // Check if form values match user data
    if (form.value.email === user.email && form.value.password === user.password) {
      console.log('Login successful');
      this.errorMessage = ''; // Clear error message
    } else {
      this.errorMessage = 'Wrong email or password';
    }
  } 
  this.userService.setUsername(form.value.email);
  localStorage.setItem('username', form.value.email);
}}
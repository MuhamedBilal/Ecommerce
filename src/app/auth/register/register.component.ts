import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    name: ['', Validators.required],
    username: ['', [Validators.required, Validators.pattern(/^\S*$/)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)]]
  });

  constructor(private fb: FormBuilder,
    private router: Router) {}

  onSubmit() {

  localStorage.setItem('registeredData', JSON.stringify(this.registerForm.value))
  this.router.navigate(['/login'])
    }
  }

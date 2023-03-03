import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  title = "Register";

  registerForm = new FormGroup({
    first_name: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]),
    last_name: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]),
    username: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]), // még nem teljesen kész (ne számmal kezdődjön)
    password: new FormControl('', [Validators.required,Validators.minLength(5)]),
    passwordConfirmation: new FormControl('', [Validators.required,Validators.minLength(5)]), //ugyan az szerepeljen benne mint a passwordben is!
    email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$]')]) //Validator még nem működik!
  })
  registerUser(){
    console.warn(this.registerForm.value)
  }

  get first_name() {
    return this.registerForm.get('first_name')
  }

  get last_name() {
    return this.registerForm.get('last_name')
  }

  get username() {
    return this.registerForm.get('username')
  }

  get password() {
    return this.registerForm.get('password')
  }

  get passwordConfirmation() {
    return this.registerForm.get('passwordConfirmation')
  }

  // checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
  //   let password = group.get('password').value;
  //   let passwordConfirmation = group.get('passwordConfirmation').value
  //   return password === passwordConfirmation ? null : { notSame: true }
  // }

  get email() {
    return this.registerForm.get('email')
  }

  constructor() {}

  ngOnInit(): void {
    
  }
}

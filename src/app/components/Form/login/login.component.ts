import { Component, OnInit   } from '@angular/core'; 
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  title="Login";

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required,Validators.minLength(5),Validators.pattern('[a-zA-Z]+$')]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)])
  })
  loginUser(){
    console.warn(this.loginForm.value)
  }

  get username(){
    return this.loginForm.get('username')
  }

  get password(){
    return this.loginForm.get('password')
  }

  constructor() {}

  ngOnInit(): void {
    
  }
}

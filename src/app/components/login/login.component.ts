import { Component } from '@angular/core';

import { UserDTO } from '../../models/user.dto';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user: UserDTO;
  email: FormControl;
  password: FormControl;
  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder){
    this.user = new UserDTO('', '');

    this.email = new FormControl(this.user.email);

    this.password = new FormControl(this.user.password);

    this.loginForm = this.formBuilder.group({
      email: this.email,
      password: this.password
    });
  }

  onSubmit(){
    this.user.email = this.email.value;
    this.user.password = this.password.value;

    console.log('User: ' + this.user.email);
    console.log('Password: ' + this.user.password);
  }
}

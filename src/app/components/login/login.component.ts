import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { UserDTO } from '../../models/user.dto';

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

    this.email = new FormControl(this.user.email, Validators.required);

    this.password = new FormControl(this.user.password, [
      Validators.required,
      Validators.minLength(8),
    ]);

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

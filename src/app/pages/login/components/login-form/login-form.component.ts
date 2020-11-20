import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    senha: new FormControl("", [Validators.required]),
  });

  constructor(
    private router: Router,
    private user:UserService
  ) { }

  submit():void 
  {  
    if(this.form.controls["email"].value === this.user.email && this.form.controls["senha"].value === this.user.senha)
      this.validForm();
    else
      this.invalidForm(); 
  }

  validForm():void 
  {
    this.router.navigate(["/home"]);
  }

  invalidForm():void 
  {
    this.errorSnackBar = true;
    this.form.controls["email"].setValue("");
    this.form.controls["senha"].setValue("");
  }
  errorSnackBar = false

}
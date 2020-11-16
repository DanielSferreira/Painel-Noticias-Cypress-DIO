import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-congigs',
  templateUrl: './congigs.component.html',
  styleUrls: ['./congigs.component.css']
})
export class CongigsComponent implements OnInit {

  constructor(
    private router: Router,
    private user: UserService
  ) { }
  form: FormGroup = new FormGroup({
    nome: new FormControl(""),
    email: new FormControl(""),
    senha: new FormControl(""),
  });
  ngOnInit(): void {
  }

  SnackBar = false;
  validForm(): void {
    
    this.user.nome = this.form.controls["nome"].value;
    this.user.email = this.form.controls["email"].value;
    this.user.senha = this.form.controls["senha"].value;

    this.SnackBar = true;
    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 1500)
  }
}

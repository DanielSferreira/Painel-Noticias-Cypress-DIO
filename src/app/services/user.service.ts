import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  email: string;
  senha: string;
  nome:string;
  
  constructor() {
    this.email = "daniel6991ferreira@gmail.com";
    this.senha = "123456"
    this.nome = "Daniel S Ferreira"
  }

  updateValues(
      email = this.email,
      senha = this.senha, 
      nome = this.nome): void {
    this.email = email;
    this.senha = senha;
    this.nome = nome;
  }

}

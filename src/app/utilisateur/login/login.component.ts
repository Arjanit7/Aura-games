import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import{AuthService} from '../../auth.service'
import{NgForm} from '@angular/forms'
import{ToastrService} from 'ngx-toastr'
import{Utilisateur} from '../../partage/utilisateur.model'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  utilisateur: Utilisateur;
  emailPatern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"

  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private Auth:AuthService){}

  ngOnInit(){

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  loginuser(event){
    event.preventDefault()
    const target =event.target
    const email = target.querySelector('#email').value
    const mdp = target.querySelector('#mdp').value
    this.Auth.getUserDetails(email,mdp)
 alert("Vous êtes connecté");
  }

}


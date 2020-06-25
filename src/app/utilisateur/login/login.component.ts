import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import{AuthService} from '../../auth.service'
import{NgForm} from '@angular/forms'
import{ToastrService} from 'ngx-toastr'
import{Utilisateur} from '../../partage/utilisateur.model'
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  public login=[];
  utilisateur: Utilisateur;
  emailPatern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  mdp:string;
  connect=false;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private Auth:AuthService, private apilog:LoginService){}

  ngOnInit(){
  }
change(a){
this.mdp=a.target.value
}
  selog(email:string){
    console.log(email)
    this.apilog.changeurl(email)
    this.apilog.getlogurl()
    .subscribe(data=>{this.login = data;})
    for (let index = 0; index < this.login.length; index++) {
      if (this.login[index].mdp==this.mdp) {
  this.connect=true
      }

    }

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


import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import{AuthService} from '../../auth.service'
import{NgForm} from '@angular/forms'
import{ToastrService} from 'ngx-toastr'
import{Utilisateur} from '../../partage/utilisateur.model'
import {UtilisateurrService} from '../../partage/utilsateur.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  utilisateur: Utilisateur
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(private userService: UtilisateurrService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.utilisateur = {
      nom: '',
      prenom: '',
      date_de_naissance: '',
      email: '',
      mdp: ''
    }
  }

  OnSubmit(form: NgForm) {
    this.userService.registerUser(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          this.resetForm(form);
          this.toastr.success('User registration successful');
        }
        else
          this.toastr.error(data.Errors[0]);
      });
  }

}

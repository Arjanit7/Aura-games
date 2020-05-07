import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
import{Utilisateur} from './utilisateur.model'

@Injectable()
export class UtilisateurrService {
  readonly rootUrl = 'http://localhost:35257';//dfdddddddddddddddddddddddddd
  constructor(private http: HttpClient) { }

  registerUser(utilisateur:Utilisateur) {
    const body: Utilisateur = {
      nom: utilisateur.nom,
      prenom: utilisateur.prenom,
      date_de_naissance: utilisateur.date_de_naissance,
      email: utilisateur.email,
      mdp: utilisateur.mdp
    }
    var reqHeader = new HttpHeaders({'No-Auth':'True'});
    return this.http.post(this.rootUrl + '/api/User/Register', body,{headers : reqHeader});
  }

  userAuthentication(userName, password) {
    var data = "username=" + userName + "&password=" + password + "&grant_type=password";
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
    return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
  }

  getUserClaims(){
   return  this.http.get(this.rootUrl+'/api/GetUserClaims');
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl="http://localhost:3000/addPerson";

  constructor(private http:HttpClient) { }

  getUserDetails(email,mdp){
    return this.http.post(this.apiUrl,{
      email,
      mdp
    }).subscribe(data=>{
      console.log(data,"oui")
    })

  }
}

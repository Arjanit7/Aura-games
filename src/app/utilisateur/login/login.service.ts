import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apilogUrl="http://localhost:3000/client/login/";
  cli:string;

  constructor(private http:HttpClient) { }
  getlogurl() {
    console.log(this.apilogUrl+this.cli)
    return this.http.get<[]>(this.apilogUrl+this.cli);
  }
  changeurl(email:string){
    this.cli=email
  }
}

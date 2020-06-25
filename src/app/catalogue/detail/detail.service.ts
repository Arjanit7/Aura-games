import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogue } from './../catalogue';
import {BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  apicataUrl="http://localhost:3000/jeu/";
  apicomUrl="http://localhost:3000/commentaire/";

  private messageSource = new BehaviorSubject<string>("a");
  currentMessage = this.messageSource.asObservable();
  private id= "0";

  constructor(private http:HttpClient) { }

  changeMessage(message: string) {
    this.messageSource.next(message)
    this.id=message;
    //console.log(message)
  }

  getlecom(){
    return this.http.get<[]>(this.apicomUrl+this.id);
  }

  getleJeu() {
    //console.log(this.id)
    if(this.id !="a"){
    return this.http.get<JSON>(this.apicataUrl+this.id);
    }
  }
}

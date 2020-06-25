import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { compte } from './creer';

@Injectable({
  providedIn: 'root'
})
export class CreerService {

  constructor(private http:HttpClient) { }

  ajouter(lecli : compte) {
    console.log("shdkgsd  :",lecli)
    return this.http.post("http://localhost:3000/addpersonne",lecli);
  }
}

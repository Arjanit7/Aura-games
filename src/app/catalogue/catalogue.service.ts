import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Catalogue } from './catalogue';

@Injectable({
  providedIn: 'root'
})

export class CatalogueService {
apicataUrl="http://localhost:3000/jeu";

  constructor(private http:HttpClient) { }

  getJeu() {
    return this.http.get<Catalogue[]>(this.apicataUrl);

  }


}

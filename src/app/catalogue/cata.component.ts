import { Component, OnInit } from '@angular/core';
import {CatalogueService} from './catalogue.service'
import {Catalogue} from './catalogue';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';



@Component({
  selector: 'app-catalogue',
  templateUrl: './cata.component.html',
  styleUrls: ['./cata.component.css']
})


export class catacomponent  implements OnInit{

 // listcatalogue:Catalogue[];
 public catalogue=[];
 public images = ["./assets/image/1.jpg","./../../assets/image/2.jpg","./../../assets/image/3.jpg","./../../assets/image/4.jpg","./../../assets/image/5.jpg","./../../assets/image/6.jpg"];

  constructor(private api:CatalogueService ) {


  }

  ngOnInit(){

return this.api.getJeu()
.subscribe(data=>{this.catalogue = data;})
  }

}




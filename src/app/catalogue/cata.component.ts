import { Component, OnInit } from '@angular/core';
import {CatalogueService} from './catalogue.service'
import {Catalogue} from './catalogue';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';
import { DetailService } from './detail/detail.service';



@Component({
  selector: 'app-catalogue',
  templateUrl: './cata.component.html',
  styleUrls: ['./cata.component.css']
})


export class catacomponent  implements OnInit{

 // listcatalogue:Catalogue[];
 public catalogue=[];


  constructor(private api:CatalogueService,private url:DetailService ) {
  }

  ngOnInit(){


return this.api.getJeu()
.subscribe(data=>{this.catalogue = data;})
  }

  newMessage(id:number) {
    console.log(id.toString())
    this.url.changeMessage(id.toString())
  }
}




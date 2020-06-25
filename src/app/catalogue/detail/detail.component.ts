import { Component, OnInit } from '@angular/core';
import{DetailService} from './detail.service'
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class detailComponent implements OnInit {
id: number;
public lejeu: JSON;
public coms: [];
public sub : any;
public qtit: string;
  constructor( public route: ActivatedRoute,private api:DetailService,private apicom:DetailService) {


  }
  ngOnInit() {

   this.sub=this.route.params.subscribe(params=>{
     this.id = +params['id'];
   });

    this.api.getleJeu()
   .subscribe(data=>{this.lejeu = data;})

    this.apicom.getlecom()
   .subscribe(data=>{this.coms = data;})
  }

  newMessage() {
   // this.api.changeMessage("2")
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
  stock(){
    if (this.lejeu[0].quantité_stock <= 30) {
      this.qtit=" très peu"
    }
    else if (this.lejeu[0].quantité_stock <= 50) {
      this.qtit="peu"
    }
    else if (this.lejeu[0].quantité_stock >50) {
      this.qtit="suffiant"
    }
  }

}

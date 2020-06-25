import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CreerService } from './creer.service';
import { compte } from './creer';
import { DatePipe, getLocaleMonthNames } from '@angular/common';


@Component({
  selector: 'app-creercompte',
  templateUrl: './creercompte.component.html',
  styleUrls: ['./creercompte.component.css']
})
export class creercomptecomponent implements OnInit {
  checkout;
  comptemodel = new compte();
  minDate: Date;
  maxDate: Date;
  ajdDate: Date;
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(private setapi:CreerService,private datePipe: DatePipe) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    const currenMonth = new Date().getMonth();
    const currentDay = new Date().getDay()
    this.minDate = new Date(currentYear - 100, currenMonth, 29-currentDay);
    this.maxDate = new Date(currentYear - 18,currenMonth, 29-currentDay);
    //this.ajdDate = new format('jj-MM-yyyy')
  }

  private http:HttpClient;



  loginuser() : void{
    this.comptemodel.date_de_naissance= this.datePipe.transform(this.comptemodel.date_de_naissance,"yyyy-MM-dd")
    console.log(this.comptemodel)
    this.setapi.ajouter(this.comptemodel)
    .subscribe(
      data => console.log("ok!!",data),
      error => console.error('Error!',error)
    )
    console.log(this.comptemodel)
    //this.http.post("http://localhost:3000//addpersonne",event).subscribe(
      //res=>{
      //  console.log(res)
     // }
    //)

  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  ngOnInit(): void {
  }
}

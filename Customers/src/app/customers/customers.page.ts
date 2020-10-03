import { Component, OnInit } from '@angular/core';
//import { CustomersService } from '../customers.service';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { threadId } from 'worker_threads';
//import { Customer } from '../customers/customers.model';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  //customers = [];
  

  constructor(private http: HttpClient) { }
    
  customersArray= [];
  //obj: any;
  //data: any;

  
  ngOnInit() {
   return this.http.get('./assets/customers.json').subscribe(
      data => {
         for (let key in data['customers']) //data = eksoteriko object customers=array.. key = index
         //if(data.hasOwnProperty(key))
           //console.log(data[key]); 
         this.customersArray.push(data['customers'][key]); //key is the index
         console.log(this.customersArray);
         //console.log(this.customers[0][0].id);
      },
      
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
    /*
    this.customersService.getData().subscribe();*/
  }

}
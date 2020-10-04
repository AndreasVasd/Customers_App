import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  
  constructor(private http: HttpClient) { }
    
  //Initialize my custom customers array
  customersArray= [];

  
  ngOnInit() {
   //Send the GET request
   return this.http.get('./assets/customers.json').subscribe(
      dataRes => {
         for (let key in dataRes['customers']) //dataRes = eksoteriko object(response of request), customers=array of objects.. key = index
          //console.log(data['customers']);
          this.customersArray.push(dataRes['customers'][key]); //key is the index
          //console.log(this.customersArray);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }

}
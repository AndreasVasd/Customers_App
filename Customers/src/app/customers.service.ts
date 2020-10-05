import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  Subscriber: any;
  customersArray= [];

 selectedCustomer: any

  constructor(private http: HttpClient) { }

  //Send the GET request
  getData() {
    this.Subscriber = this.http.get('./assets/customers.json').subscribe(
      dataRes => {
         for (let key in dataRes['customers']) 
          //console.log(data['customers']);
          this.customersArray.push(dataRes['customers'][key]); 
          //console.log(this.customersArray);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );  

    return this.Subscriber;

  }
   

}

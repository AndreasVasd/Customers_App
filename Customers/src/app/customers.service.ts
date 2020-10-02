import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  customers = [];

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(
      'http://northwind.servicestack.net/customers.json').toPromise().then(resData => {
        console.log(resData);
      });
  }

}

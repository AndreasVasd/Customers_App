import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";



@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {


  constructor(private http: HttpClient,) { }
    
 
  Subscriber: any;
  customersArray= [];
  

  //For filtering
  searchItem: string = "";
  filterCus= [];
  
  ngOnInit() {

   //Send the GET request
    this.Subscriber = this.http.get('./assets/customers.json').subscribe(
      dataRes => {
         for (let key in dataRes['customers']) 
          //console.log(data['customers']);
          this.customersArray.push(dataRes['customers'][key]); //key is the index
          //console.log(this.customersArray);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );  

    this.filterCus = this.customersArray;
    return this.Subscriber;

  }

  //Filtering
  filterCustomers(searchItem) { 
       this.filterCus = this.customersArray.filter(customer => { 
      return customer.contactName.indexOf(searchItem) > -1; 
    }); 
  }
 

}
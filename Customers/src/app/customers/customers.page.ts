import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {

@Output() onCustomerSelect = new EventEmitter();


  constructor(private http: HttpClient,
              private customersSer: CustomersService) { }
    
 
  Subscriber: any;
  customersArray= [];

  //For filtering
  searchItem: string = "";
  filterCus= [];
  
  ngOnInit() {

    this.customersSer.getData();
    this.filterCus = this.customersSer.customersArray; 


  }

  //Filtering
  filterCustomers(searchItem) { 
      this.filterCus = this.customersSer.customersArray.filter(customer => { 
      return customer.contactName.indexOf(searchItem) >-1; 
      
    }); 
    console.log(this.filterCus); // only filtered results
  }

  customerSelected(customerSel) {
    this.customersSer.selectedCustomer = customerSel;
  }
 

}
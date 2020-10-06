import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {



  constructor(private customersSer: CustomersService) { }
    
 
  customersArray= [];

  //For filtering
  searchItem: string = "";
  filterCus= [];
  
  ngOnInit() {

    this.customersSer.getData(); //get json data from the service 
    this.filterCus = this.customersSer.customersArray;  // for displaying all the customers from the begining


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
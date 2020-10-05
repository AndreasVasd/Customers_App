import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CustomersService } from '../customers.service';


@Component({
  selector: 'app-customers-info',
  templateUrl: './customers-info.page.html',
  styleUrls: ['./customers-info.page.scss'],
})
export class CustomersInfoPage implements OnInit {

  constructor(private customersSer: CustomersService) { }

  specific_customer: any

  


  ngOnInit() {
    this. specific_customer = this.customersSer.selectedCustomer 
  }

  
  
 

}

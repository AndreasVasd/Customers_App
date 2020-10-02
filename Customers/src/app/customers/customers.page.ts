import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-customers',
  templateUrl: './customers.page.html',
  styleUrls: ['./customers.page.scss'],
})
export class CustomersPage implements OnInit {
  customers = [];


  constructor(private http: HttpClient) { 
    this.http.get('http://northwind.netcore.io/customers.json').toPromise().then(data => {
      console.log(data);

      for(let key in data)
        if(data.hasOwnProperty(key))
        this.customers.push(data[key]);
    });
  }
   

    
  

  ngOnInit() {
    /*
    this.customersService.getData().subscribe();*/
  }

}

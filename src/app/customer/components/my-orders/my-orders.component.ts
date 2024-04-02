import { Component } from '@angular/core';
import { CustomerService } from 'app/customer/services/customer.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrl: './my-orders.component.scss'
})
export class MyOrdersComponent {

  myOrders: any[] = [];

  constructor(
    private customerService: CustomerService,

  ){}

  ngOnInit() {
    this.getUserOrders();
  }


  getUserOrders() {
    this.customerService.getPlacedOrders().subscribe(
      res => {
        this.myOrders = res;
      }
    )
  }

}

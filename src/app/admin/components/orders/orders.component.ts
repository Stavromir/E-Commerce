import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'app/admin/service/admin.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.scss'
})
export class OrdersComponent {

  orders: any[] = [];

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,

  ){}

  ngOnInit(){
    this.getPlacedOrders();
  }



  getPlacedOrders(){
    this.adminService.getAllOrders().subscribe(
      res=> {
        this.orders = res;
      }
    )
  }

}

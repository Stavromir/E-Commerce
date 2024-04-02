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


  changeOrderStatus(orderId: any, status: any){
    this.adminService.changeOrderStatus(orderId, status).subscribe(
      res => {
          this.snackBar.open('Order status changed successfully!', 'Close', {duration: 5000});
          this.getPlacedOrders();
      },
      error => {
        let errorMessage = `${error.status} \ ${error.error}`
        this.snackBar.open(errorMessage, 'Clsoe', {duration: 5000})
      }
    )
  }



  getPlacedOrders(){
    this.adminService.getAllOrders().subscribe(
      res=> {
        this.orders = res;
      }
    )
  }

}

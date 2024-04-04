import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CustomerService } from 'app/customer/services/customer.service';

@Component({
  selector: 'app-place-order',
  templateUrl: './place-order.component.html',
  styleUrl: './place-order.component.scss'
})
export class PlaceOrderComponent {

  orderForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private customerService: CustomerService,
    private router: Router,
    private dialog: MatDialog,
    
  ){}

  ngOnInit() {
    this.orderForm = this.fb.group({
      address: [null, [Validators.required]],
      orderDescription: [null],
    })
  }


  placeOrder() {
    this.customerService.placeOrder(this.orderForm.value).subscribe(
      res => {
            this.snackBar.open('Order placed successfully', 'Close', {duration: 5000});
            this.closeForm();
            this.router.navigateByUrl('/customer/myOrders');  
      }, 
      error => {
        let errorMessage = `${error.status} \ ${error.error}`
        this.snackBar.open(errorMessage, 'Clsoe', {duration: 5000});
      }
    )
  }

  closeForm() {
    this.dialog.closeAll();
  }

}

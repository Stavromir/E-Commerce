import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomerService } from 'app/customer/services/customer.service';

@Component({
  selector: 'app-view-wish-list',
  templateUrl: './view-wish-list.component.html',
  styleUrl: './view-wish-list.component.scss'
})
export class ViewWishListComponent {

  products: any [] = [];

  constructor(
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(){
    this.getWishList();
  }


  getWishList(){
    this.customerService.getToWishList().subscribe(
      res => {
        res.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
          this.products.push(element);
          this.snackBar.open('WishList loaded successfully', 'Close', {duration: 5000});
        });

      }, 
      error => {
        let errorMessage = `${error.status} \ ${error.error.message}`
        this.snackBar.open(errorMessage, 'Clsoe', {duration: 5000});
      }
    )
  }

}

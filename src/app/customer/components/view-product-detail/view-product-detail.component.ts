import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'app/customer/services/customer.service';
import { UserStorageService } from 'app/services/storage/user-storage.service';

@Component({
  selector: 'app-view-product-detail',
  templateUrl: './view-product-detail.component.html',
  styleUrl: './view-product-detail.component.scss'
})
export class ViewProductDetailComponent {


  productId: number = this.activatedRoute.snapshot.params['productId'];
  productDto: any;
  reviewDtos: any[] = [];
  faqDtos: any[] = [];

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
  ){}


  ngOnInit(){
    this.getProductDetailsById();
  }

  addProductToWishList(){
    const wishListDto = {
      productId: this.productId,
      userId: UserStorageService.getUserId(),
    }
    this.customerService.addProductToWishList(wishListDto).subscribe(
      res => {
        this.snackbar.open('Product added to wishlist seccessfully', 'Close', {duration: 5000});
      },
      error => {
        let errorMessage = `${error.status} \ ${error.error}`
        this.snackbar.open(errorMessage, 'Clsoe', {duration: 5000});
      }
    )
  }


  getProductDetailsById() {
    this.customerService.getProductDetails(this.productId).subscribe(
      res => {
          this.productDto = res.productDto;
          this.productDto.processedImg = 'data:image/jpeg;base64,' + res.productDto.byteImg;
          this.faqDtos = res.faqDtos;
          res.reviewDtos.forEach(element => {
            element.processedImg = 'data:image/jpeg;base64,' + element.returnedImg;
            this.reviewDtos.push(element);
          })
          this.snackbar.open('Successfully load product', 'Close', {duration: 5000})
      },
      error => {
        let errorMessage = `${error.status} \ ${error.error}`
        this.snackbar.open(errorMessage, 'Clsoe', {duration: 5000});
      }
    )
  }

}

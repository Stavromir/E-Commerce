import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'app/customer/services/customer.service';

@Component({
  selector: 'app-view-ordered-products',
  templateUrl: './view-ordered-products.component.html',
  styleUrl: './view-ordered-products.component.scss'
})
export class ViewOrderedProductsComponent {

  orderID: number = this.activatedRoute.snapshot.params['orderId'];

  orderedProducts: any[] = [];
  orderAmount: number;

  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
  ){}


  ngOnInit(){
    this.getOrderedProductsDetails();
  }

  getOrderedProductsDetails(){
    this.customerService.getOrderedProducts(this.orderID).subscribe(
      res => {
        res.productDtos.forEach(element => {
          element.processedImg = 'data:image/jpeg;base64,' + element.byteImg;
          this.orderedProducts.push(element);
        });
        this.orderAmount = res.orderAmount;
      })
  }
}

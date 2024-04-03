import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { PlaceOrderComponent } from './components/place-order/place-order.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { ViewOrderedProductsComponent } from './components/view-ordered-products/view-ordered-products.component';
import { ReviewOrderedProductComponent } from './components/review-ordered-product/review-ordered-product.component';

const routes: Routes = [
  { path: '', component: CustomerComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cart', component: CartComponent },
  { path: 'placeOrder', component: PlaceOrderComponent },
  { path: 'myOrders', component: MyOrdersComponent },
  { path: 'ordered_products/:orderId', component: ViewOrderedProductsComponent },
  { path: 'review/:orderId/:productId', component: ReviewOrderedProductComponent },

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

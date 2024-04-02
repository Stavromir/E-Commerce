import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PostCouponeComponent } from './components/post-coupone/post-coupone.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateProductFaqComponent } from './components/create-product-faq/create-product-faq.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'category', component: PostCategoryComponent },
  { path: 'product', component: PostProductComponent },
  { path: 'post-coupon', component: PostCouponeComponent },
  { path: 'coupons', component: CouponsComponent },
  { path: 'orders', component: OrdersComponent },
  // { path: 'faq', component: CreateProductFaqComponent },
  { path: 'faq/:productId', component: CreateProductFaqComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

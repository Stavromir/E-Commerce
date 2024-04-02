import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularMaterialModul } from '../AngularMaterialModul';
import { PostCategoryComponent } from './components/post-category/post-category.component';
import { PostProductComponent } from './components/post-product/post-product.component';
import { PostCouponeComponent } from './components/post-coupone/post-coupone.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateProductFaqComponent } from './components/create-product-faq/create-product-faq.component';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    PostCategoryComponent,
    PostProductComponent,
    PostCouponeComponent,
    CouponsComponent,
    OrdersComponent,
    CreateProductFaqComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AngularMaterialModul,
  ]
})
export class AdminModule { }

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../../services/storage/user-storage.service';

const BASIC_URL = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addCategory(categoryDto:any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/categories', categoryDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCategory(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/categories', {
      headers: this.createAuthorizationHeader(),
    })
  }

  addProduct(productDto:any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/product', productDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  updateProduct(productDto:any, productId: any): Observable<any> {
    const id = productId;
    productDto.id = id;
    return this.http.put(BASIC_URL + '/api/admin/product/update', productDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/products', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getProductsById(productId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProductsByName(name: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/search/${name}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  deleteProduct(productId:any): Observable<any> {
    return this.http.delete(BASIC_URL + `/api/admin/product/${productId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  addCoupon(couponDto: any): Observable<any> {
    return this.http.post(BASIC_URL + '/api/admin/coupons', couponDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllCoupons(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/coupons', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllOrders(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/orders', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAnalytics(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/admin/analytics', {
      headers: this.createAuthorizationHeader(),
    })
  }

  changeOrderStatus(orderId: any, status: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/admin/orders/${orderId}/${status}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  createFAQ(faqDto: any, productId: number): Observable<any> {
    faqDto.productId = productId;
    return this.http.post(BASIC_URL + `/api/admin/faq`, faqDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}

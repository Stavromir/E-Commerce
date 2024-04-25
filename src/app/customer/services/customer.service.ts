import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserStorageService } from 'app/services/storage/user-storage.service';
import { Observable } from 'rxjs';


const BASIC_URL = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient,

  ) { }


  getAllProducts(): Observable<any> {
    return this.http.get(BASIC_URL + '/api/customer/products', {
      headers: this.createAuthorizationHeader(),
    })
  }

  getProductDetails(productId: number): Observable<any> {
    return this.http.get(BASIC_URL + `/api/customer/products/${productId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getAllProductsByName(name: any): Observable<any> {
    return this.http.get(BASIC_URL + `/api/customer/products/${name}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  addToCart(productId: any): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    return this.http.post(BASIC_URL + '/api/customer/carts', cartDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  increaseProductQuantity(productId: any): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    return this.http.post(BASIC_URL + '/api/customer/carts/addition', cartDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  decreaseProductQuantity(productId: any): Observable<any> {
    const cartDto = {
      productId: productId,
      userId: UserStorageService.getUserId()
    }
    return this.http.post(BASIC_URL + '/api/customer/carts/subtraction', cartDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getCartByUserId(): Observable<any> {
    const userId = UserStorageService.getUserId()
    return this.http.get(BASIC_URL + `/api/customer/carts/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  applyCoupon(code: any): Observable<any> {
    const userId = UserStorageService.getUserId()
    return this.http.get(BASIC_URL + `/api/customer/coupons/${userId}/${code}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  placeOrder(orderDto: any): Observable<any> {
    orderDto.userId = UserStorageService.getUserId()
    return this.http.post(BASIC_URL + `/api/customer/orders`, orderDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getPlacedOrders(): Observable<any> {
    const userId = UserStorageService.getUserId()
    return this.http.get(BASIC_URL + `/api/customer/orders/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getOrderedProducts(orderId: number): Observable<any> {
    
    return this.http.get(BASIC_URL + `/api/customer/products/${orderId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }

  placeRevie(reviewDto: any): Observable<any> {
    return this.http.post(BASIC_URL + `/api/customer/reviews`, reviewDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  addProductToWishList(wishListDto: any): Observable<any> {
    return this.http.post(BASIC_URL + `/api/customer/wishlists`, wishListDto, {
      headers: this.createAuthorizationHeader(),
    })
  }

  getToWishList(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `/api/customer/wishlists/${userId}`, {
      headers: this.createAuthorizationHeader(),
    })
  }


  private createAuthorizationHeader(): HttpHeaders{
    return new HttpHeaders().set(
      'Authorization', 'Bearer ' + UserStorageService.getToken()
    )
  }
}

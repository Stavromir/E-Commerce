import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'app/customer/services/customer.service';
import { UserStorageService } from 'app/services/storage/user-storage.service';

@Component({
  selector: 'app-review-ordered-product',
  templateUrl: './review-ordered-product.component.html',
  styleUrl: './review-ordered-product.component.scss'
})
export class ReviewOrderedProductComponent {

  productId: number = this.activatedRouter.snapshot.params['productId'];
  orderId: number = this.activatedRouter.snapshot.params['orderId'];
  reviewForm!: FormGroup;
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private snackBar: MatSnackBar,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ){}


  ngOnInit(){
    this.reviewForm = this.fb.group({
      rating: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    this.previewImage();
  }

  previewImage(){
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  submitForm(){
    const formData: FormData = new FormData;
    formData.append('img', this.selectedFile);
    formData.append('productId', this.productId.toString());
    formData.append('userId', UserStorageService.getUserId());
    formData.append('rating', this.reviewForm.get('rating').value);
    formData.append('description', this.reviewForm.get('description').value);

    this.customerService.placeRevie(formData).subscribe(
      res => {
        this.snackBar.open('Review added successfully', 'Close', {duration: 5000});
        this.router.navigateByUrl('/customer/ordered_products/' + this.orderId);

      },
      error => {
        let errorMessage = `${error.status} \ ${error.error}`
        this.snackBar.open(errorMessage, 'Clsoe', {duration: 5000});
      }
    )

  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'app/admin/service/admin.service';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-post-coupone',
  templateUrl: './post-coupone.component.html',
  styleUrl: './post-coupone.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class PostCouponeComponent {

  couponForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
  ) { }


  ngOnInit() {
    this.couponForm = this.fb.group({
      name: [null, [Validators.required]],
      code: [null, [Validators.required]],
      discount: [null, [Validators.required]],
      expirationDate: [null, [Validators.required]],
    })
  }

  addCoupon() {
    if (this.couponForm.valid) {
      this.adminService.addCoupon(this.couponForm.value).subscribe(
        res => {

          this.snackBar.open('Coupon add successfully!', 'Close', { duration: 5000 });
          this.router.navigateByUrl('/admin/dashboard')

        },
        error => {
          let errorMessage = `${error.status} \ ${error.error.message}`
          this.snackBar.open(errorMessage, 'Clsoe', { duration: 5000 });
        }
      )
    } else {
      this.couponForm.markAllAsTouched();
    }
  }
}

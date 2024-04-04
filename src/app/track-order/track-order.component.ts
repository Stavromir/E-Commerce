import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'app/services/auth/auth.service';

@Component({
  selector: 'app-track-order',
  templateUrl: './track-order.component.html',
  styleUrl: './track-order.component.scss'
})
export class TrackOrderComponent {

  searchOrderForm!: FormGroup;
  order: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(){
    this.searchOrderForm = this.fb.group({
      trackingId: [null, [Validators.required]],
    })
  }

  submitForm() {
    const trackingId = this.searchOrderForm.get('trackingId').value;
    this.authService.getOrderByTrackingId(trackingId).subscribe(
      res=> {
        console.log(res);
        this.order = res;
      }
    )
  }

}

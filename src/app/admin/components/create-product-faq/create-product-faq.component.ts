import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/admin/service/admin.service';

@Component({
  selector: 'app-create-product-faq',
  templateUrl: './create-product-faq.component.html',
  styleUrl: './create-product-faq.component.scss'
})
export class CreateProductFaqComponent {

  faqForm!: FormGroup;
  productId: number = this.activatedRoute.snapshot.params['productId'];

  constructor(
    private fb: FormBuilder,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ){}


  ngOnInit(): void{
    this.faqForm = this.fb.group({
      question: [null, [Validators.required]],
      answer: [null, [Validators.required]],
    })
  }

  createFaq(){
    
    this.adminService.createFAQ(this.faqForm.value, this.productId).subscribe(
      res => {
        this.snackBar.open('FAQ created successfully', 'Close', {duration: 5000})
        this.router.navigateByUrl('/admin/dashboard');
      },
      error =>{
        let errorMessage = `${error.status} \ ${error.error}`
        this.snackBar.open(errorMessage, 'Clsoe', {duration: 5000})
      }
    )
  }


}

import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'app/admin/service/admin.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.scss'
})
export class UpdateProductComponent {

  productForm: FormGroup;
  listOfCategories: any = [];
  selectedFile: File | null;
  imagePreview: string | ArrayBuffer | null;
  productId : number = this.activatedRoute.snapshot.params['productId'];

  existingImage: String | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminService: AdminService,
    private activatedRoute: ActivatedRoute,
  ) {}

  onFileSelected(event: any) {
    this.selectedFile = event.currentTarget.files[0];
    this.previewImage();
    this.existingImage = null;
  }

  previewImage() {
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      categoryId: [null, [Validators.required]],
      name: [null, [Validators.required]],
      price: [null, [Validators.required]],
      description: [null, [Validators.required]],
    })

    this.getAllCategories();
    this.getProductById();
  }

  getAllCategories() {
    this.adminService.getAllCategory().subscribe(
      res=>{
        this.listOfCategories = res;
      }
    )
  }

  getProductById() {
    this.adminService.getProductsById(this.productId).subscribe(
      res => {
        this.productForm.patchValue(res);
        this.existingImage = 'data:image/jpeg;base64,' + res.byteImg;
      },
      error => {
        let errorMessage = `${error.status} \ ${error.error}`
        this.snackBar.open(errorMessage, 'Clsoe', {duration: 5000})
      }
    )
  }

  updateProduct(): void {
    if(this.productForm.valid) {
      const formData: FormData = new FormData();

      if(this.selectedFile){
        formData.append('img', this.selectedFile);
      }

      formData.append('categoryId', this.productForm.get('categoryId').value);
      formData.append('name', this.productForm.get('name').value);
      formData.append('description', this.productForm.get('description').value);
      formData.append('price', this.productForm.get('price').value);
      formData.append('id', this.productId.toString())

      this.adminService.updateProduct(formData, this.productId).subscribe(
        res => {
          
            this.snackBar.open('Product updated successfully', 'Close', {duration: 5000});
            this.router.navigateByUrl('/admin/dashboard');
        },
        error => {
          let errorMessage = `${error.status} \ ${error.error}`
          this.snackBar.open(errorMessage, 'Clsoe', {duration: 5000})
        }
      )
    } else {
      for(const i in this.productForm.controls) {
        this.productForm.controls[i].markAsDirty;
        this.productForm.controls[i].updateValueAndValidity;
      }
    }

  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-productsss',
  templateUrl: './productsss.component.html',
  styleUrls: ['./productsss.component.css']
})
export class ProductsssComponent {

  pro: number = 1;

  ADDProduct: FormGroup;
  formData: FormData = new FormData();
  EditProductform: FormGroup;

  seletctedprduct: any = null;

  Products: any[] = [];

  constructor(private _rest: RestService, private fb: FormBuilder, private _router: Router, private _actvatedrute: ActivatedRoute) {
    this.ADDProduct = this.fb.group({
      status: new FormControl(false),
      Product_Name: new FormControl('', [Validators.required]),
      Weight: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required]),
      // discount: new FormControl('', [Validators.required]),
      // pricewithdiscount: new FormControl('', [Validators.required]),
      // Brand_id: new FormControl('', [Validators.required]),
      // Category_id: new FormControl('', [Validators.required]),
      discountAmount: new FormControl('', [Validators.required]),
      Brand_id: new FormControl(''),
      Category_id: new FormControl(''),
      Category_Name: new FormControl('', [Validators.required]),
      Brand_Name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      benefits: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      mainimage: new FormControl('', [Validators.required]),
      backimage: new FormControl('', [Validators.required]),
      tableimage: new FormControl('', [Validators.required])
    });

    this.EditProductform = this.fb.group({
      id: new FormControl(),
      status: new FormControl(false),
      Product_Name: new FormControl('', [Validators.required]),
      Weight: new FormControl('', [Validators.required]),
      Price: new FormControl('', [Validators.required]),
      // discount: new FormControl('', [Validators.required]),
      discountAmount: new FormControl('', [Validators.required]),
      Brand_id: new FormControl(''),
      Category_id: new FormControl(''),
      Category_Name: new FormControl('', [Validators.required]),
      Brand_Name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      benefits: new FormControl('', [Validators.required]),
      ingredients: new FormControl('', [Validators.required]),

      image: new FormControl(null),
      mainimage: new FormControl(null),
      backimage: new FormControl(null),
      tableimage: new FormControl(null)
    })
  }

  toggleStatus(event: any): void {
    this.ADDProduct.patchValue({
      status: event.target.checked ? 1 : 0
    });
  }

  updateStatus(event: any): void {
    this.EditProductform.patchValue({
      status: event.target.checked ? 1 : 0
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

  onFileSelected(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.formData.append(fieldName, file, file.name);
    }
  }

  onFormSubmit(): void {
    if (!this.formData) {
      this.formData = new FormData();
    }
    // Populate formData with form fields
    const formValues = this.ADDProduct.value; // or this.EditProductform.value
    for (const key in formValues) {
      if (formValues.hasOwnProperty(key)) {
        this.formData.append(key, formValues[key]);
      }
    }

    this._rest.AddProducts(this.formData).subscribe(response => {
      console.log('Upload success', response);
      this.ADDProduct.reset();
      this.getProducts();

    }, error => {
      console.error('Upload error', error);
    });
  }

  editproduct(i: number) {
    this.seletctedprduct = 1;
    this.EditProductform.patchValue(this.Products[i - 1]);
  }

  onFileChange(event: any, fieldName: string): void {
    const file = event.target.files[0];
    if (file) {
      this.EditProductform.patchValue({ [fieldName]: file });
    }
  }

  updateProduct(): void {
    const formData = new FormData();
    Object.keys(this.EditProductform.controls).forEach(key => {
      formData.append(key, this.EditProductform.get(key)?.value);
    });
    // Update form data 
    this._rest.EditProducts(this.EditProductform.value.id, formData).subscribe(
      response => {
        console.log('Update success', response);
        this.EditProductform.reset();
        this.ngOnInit();
      },
      error => {
        console.error('Update error', error);
      }
    );
  }

  DeleteProduct(id: number) {
    if (confirm('Are You  want to delete a Product..')) {
      this._rest.DeleteProduct(id).subscribe((data: any) => {
        console.log('Delete success', data);
        this.getProducts();
      }, (err: any) => {
        console.log(err);
      })
    }
  }

  getProducts() {
    this._rest.Allproducts().subscribe((data: any) => {
      console.log(data);
      this.Products = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  getStyle(product: any): any {  //function is used find a color to products stock..
    if (product.status == "1") {
      return {
        'color': 'green',
        // 'text':'Product is in Stock',
        // 'border': '2px solid green'
      }
    } else if (product.status == "0") {
      return {
        'color': 'red',
        // 'text':'Product is in Stock',
        // 'border': '2px solid red'
      }
    }
  }
}
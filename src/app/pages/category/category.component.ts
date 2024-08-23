import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  pro: any;
  allcategory: any[] = [];
  AddCategory: FormGroup;
  EditCategoryForm: FormGroup;

  selctedcategory: any = null;

  constructor(private _rest: RestService) {
    this.AddCategory = new FormGroup({
      Category_Name: new FormControl('', [Validators.required]),
    })

    this.EditCategoryForm = new FormGroup({
      Category_id: new FormControl(),
      Category_Name: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.AllCategory();
  }

  AllCategory() {
    this._rest.Category().subscribe((result: any) => {
      console.log(result);
      this.allcategory = result.data;
    }, (err) => {
      console.log(err);
    })
  }

  AddCategories() {
    this._rest.ADDCategoryToken(this.AddCategory.value).subscribe((result:any) => {
      console.log(result);
      this.allcategory.push(result.data);
      this.AllCategory();
      this.AddCategory.reset();
    }, (err) => {
      console.log(err);
    })
  }

  editcategory(i: number) {
    this.selctedcategory = 1;
    this.EditCategoryForm.patchValue(this.allcategory[i - 1]);
  }

  UpdateCategory() {
    this._rest.EditCategory(this.EditCategoryForm.value).subscribe((data: any) => {
      console.log(data);
      this.selctedcategory = null;
      this.EditCategoryForm.reset();
      this.ngOnInit();
    }, (err) => {
      console.log(err);
    })
  }

  delete(Category_id: number) {
    if (confirm('Are You Sure To Delete Category?')) {
      this._rest.Deletecategory(Category_id).subscribe(resp => {
        console.log(resp);
        this.AllCategory();
      }, err => {
        console.log(err);

        this.AllCategory();
      });
    }
  }
}

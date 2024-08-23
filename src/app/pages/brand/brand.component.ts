import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent {

  pro: any;

  AllBrands: any[] = [];
  // id = -1;
  Addbrand: FormGroup;
  editbrandForm: FormGroup;

  selectedbrand: any = null;

  constructor(private _rest: RestService) {
    this.Addbrand = new FormGroup({
      Brand_Name: new FormControl('', [Validators.required]),
    })

    this.editbrandForm = new FormGroup({
      Brand_id: new FormControl(),
      Brand_Name: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.AllBrand();
  }

  AllBrand() {
    this._rest.AllBrand().subscribe((result: any) => {
      console.log(result);
      this.AllBrands = result.data;
    }, (err) => {
      console.log(err);
    })
  }

  AddBrands() {
    this._rest.AddBrand(this.Addbrand.value).subscribe((result: any) => {
      console.log(result);
      this.AllBrands.push(result.data);
      this.AllBrand();
      this.Addbrand.reset();
    }, (err) => {
      console.log(err);
    })
  }

  editbrand(i: number) {
    this.selectedbrand = 1;
    this.editbrandForm.patchValue(this.AllBrands[i - 1]);
  }

  Updatebrand() {
    this._rest.Editbrand(this.editbrandForm.value).subscribe((result: any) => {
      console.log(result);
      this.selectedbrand = null;
      this.editbrandForm.reset();
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
    })
  }

  delete(Brand_id: number) {
    if (confirm('Are You Sure To Delete Brand ?')) {
      this._rest.Deletebrand(Brand_id).subscribe(resp => {
        console.log(resp);
        this.AllBrand();
      }, err => {
        console.log(err);
        this.AllBrand();
      });
    }
  }
}

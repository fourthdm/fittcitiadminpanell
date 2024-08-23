import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent {
  pro: any;

  coupons: any[] = [];

  couponsform: FormGroup;
  Editcouponsform: FormGroup;

  selectedcoupons: any = null;

  constructor(private _rest: RestService) {
    this.couponsform = new FormGroup({
      code: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      Brand_id: new FormControl('', [Validators.required])
    });

    this.Editcouponsform = new FormGroup({
      id: new FormControl(),
      code: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      Brand_id: new FormControl('', [Validators.required])
    })

  }

  ngOnInit(): void {
    this.getcoupons();
  }

  getcoupons() {
    this._rest.AllCoupons().subscribe((data: any) => {
      console.log(data);
      this.coupons = data.data;
    }, (err: any) => {
      console.log(err)
    })
  }

  Addcoupons() {
    const coupondata = this.couponsform.value;
    this._rest.generatecoupons(coupondata).subscribe((data: any) => {
      console.log(data);
      this.couponsform.reset();
      this.coupons.push(data.data);
      this.getcoupons();
    }, (err: any) => {
      console.log(err);
    })
  }

  editcoupon(i: number) {
    this.selectedcoupons = 1;
    this.Editcouponsform.patchValue(this.coupons[i - 1]);
  }

  updatecoupon() {
    this._rest.UpdateCoupons(this.Editcouponsform.value).subscribe((data: any) => {
      console.log(data);
      this.selectedcoupons = null;
      this.Editcouponsform.reset();
      this.ngOnInit();
    }, (err: any) => {
      console.log(err);
    })
  }

  // editcoupons(i: number) {
  //   this.selectedcoupons = 1;
  //   this.Editcouponsform.patchValue(this.coupons[i - 1]);
  // }

  // editcoupon() {
  //   this._rest.UpdateCoupons(this.Editcouponsform.value).subscribe((data: any) => {
  //     console.log(data);
  //     this.selectedcoupons = null;
  //     this.Editcouponsform.reset();
  //     this.ngOnInit();
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  delete(id: number) {
    if (confirm('Are You Sure To Delete Coupon?')) {
      this._rest.deletecoupon(id).subscribe(resp => {
        console.log(resp);
        this.getcoupons();
      }, err => {
        console.log(err);
      });
    }
  }

}

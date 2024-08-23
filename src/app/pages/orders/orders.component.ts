import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  pro: any;

  allorder: any[] = [];

  deliverydate: any[] = [];

  adddeliverydateform: FormGroup;
  selecteddate: any = null

  // editorder: FormGroup;

  constructor(private _rest: RestService) {
    this.adddeliverydateform = new FormGroup({
      id: new FormControl(''),
      Delivery_date: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
    this.Getorder()
  }

  updateorder() { }


  addorders() { }

  editbrand(i: number) {
    this.selecteddate = 1;
    this.adddeliverydateform.patchValue(this.allorder[i - 1]);
  }

  adddeliverydate() {
    this._rest.deliverydate(this.adddeliverydateform.value).subscribe((data: any) => {
      this.selecteddate = null;
      this.adddeliverydateform.reset();
      console.log(data);
    }, (err: any) => {
      console.log(err);
    })
  }

  // adddeliverydate() {
  //   this._rest.deliverydate(this.adddeliverydateform.value).subscribe((data: any) => {
  //     this.deliverydate.push(data.data);
  //     this.Getorder();
  //     this.adddeliverydateform.reset();
  //     console.log(data);
  //   }, (err: any) => {
  //     console.log(err);
  //   })
  // }

  Getorder() {
    this._rest.getorders().subscribe((data: any) => {
      console.log(data);
      this.allorder = data.data;
    }, (err) => {
      console.log(err);
    })
  }

  delete(id: number) {

  }
}

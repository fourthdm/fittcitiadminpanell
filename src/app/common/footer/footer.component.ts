import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  product: any[] = [];

  constructor(private rest: RestService,private _activatedroute : ActivatedRoute) {

  }

  ngOnInit(): void {
    this.Getproduct();
  }

  Getproduct() {
    const product_id = this._activatedroute.snapshot.paramMap.get('product_id');
    this.rest.Productbyid(product_id || '').subscribe((data: any) => {
      console.log(data);
      this.product = data.data
    }, (err: any) => {
      console.log(err)
    })
  }

}

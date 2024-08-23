import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {
  pro: any;
  enquiry: any[] = [];

  constructor(private rest: RestService) { }

  ngOnInit(): void {
    this.getdata();
  }

  getdata() {
    this.rest.getenquiry().subscribe((data: any) => {
      console.log(data);
      this.enquiry = data.data;
    }, (err: any) => {
      console.log(err);
    })
  }

  delete(Id: number) {
    if (confirm('Are You Sure To Delete It ?')) {
      this.rest.deleteinquiry(Id).subscribe((resp: any) => {
        console.log(resp);
        this.getdata();
      }, err => {
        console.log(err);
      });
    }
  }

}

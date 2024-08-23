import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  liked: boolean = false;

  Loginform: FormGroup;

  constructor(private rest: RestService, private state: StateService, private _router: Router) {
    this.Loginform = new FormGroup({
      Username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Password: new FormControl('', [Validators.required, Validators.maxLength(8)])
    })
  }

  ngOnInit(): void {

  }

  Show() {
    this.liked = !this.liked;
  }

  loginn() {
    this.rest.Login(this.Loginform.value).subscribe((data: any) => {
      console.log(data);
      // this.toastr.success(data.message, 'success');
      localStorage.setItem('token', data.data);
      this.state.token = (data.data);
      this.state.decodetoken();
      this._router.navigate(['/Home']);
    }, (err: any) => {
      console.log(err);
      // this.toastr.error(err.message, 'Error');
    })
  }

}

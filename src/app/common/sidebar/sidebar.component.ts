import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs';
import { RestService } from 'src/app/rest.service';
import { StateService } from 'src/app/state.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _rest: RestService, private _state: StateService, private _router: Router) { }

  ngOnInit(): void {

  }

  view() {

  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
  }


}

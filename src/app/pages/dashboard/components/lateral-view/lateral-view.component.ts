import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-lateral-view',
  templateUrl: './lateral-view.component.html',
  styleUrls: ['./lateral-view.component.css']
})
export class LateralViewComponent implements OnInit {

  public user

  constructor(
    private _user: UserService
  ) { }

  ngOnInit(): void {
    this.user = this._user  
  }

}

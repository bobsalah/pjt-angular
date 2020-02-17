import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  Listuser : any[];
  userSelected : {};

  constructor(private userService:UserService) { }

  ngOnInit() {
     this.Listuser = this.userService.getList();
  }

  onUserDetails(user:{}){
    this.userSelected = user;
  }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {

  Listuser : any[];
  userSubscription: Subscription;
  userSelected : {};

  constructor(private userService:UserService) { }

  ngOnInit() {
   
    this.userSubscription =  this.userService.UserSubject.subscribe(
      (value:any[]) => {
          this.Listuser = value;
        }
    );
     this.userService.emitdata();
  }

  onUserDetails(user:{}){
    this.userSelected = user;
  }

}

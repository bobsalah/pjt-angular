import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  textsearch:string;

  constructor(private userService:UserService) { }

  ngOnInit() {

  }

  onsearchUser(form:NgForm){
    
     console.log("ok");
  }

}

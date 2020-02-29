import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-detailuser',
  templateUrl: './detailuser.component.html',
  styleUrls: ['./detailuser.component.css']
})
export class DetailuserComponent implements OnInit {
 
   user : {};

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: UserService) {    }

  ngOnInit() {
    
    let id = this.route.snapshot.paramMap.get('id');  //recuperer identifiant url
    this.user = this.service.getUserId(+id);
    

  }

}

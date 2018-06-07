import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {APIService} from "../../service/api.service";
import {UserDTO} from "../../models/user-dto";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private Router: Router, private APIService: APIService) {

  }

  private user: UserDTO;

  ngOnInit() {
    this.populateUserInfo();
  }

  public populateUserInfo() {
    this.APIService
      .getCurrentUser()
      .subscribe(
        (userDto) => {
          this.user = userDto;
        },
        err => {
          console.log(err);
        })
  }


  next() {
    this.Router.navigate(['home'])
  }

}

import {Component, OnInit} from '@angular/core';
import {APIService} from "../../service/api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private APIService: APIService, private Router:Router) {
  }

  ngOnInit() {

    this.APIService.checkAuthentication().subscribe((auth: any) => {
      if (!auth.registered) {
        this.APIService.registerUserByUID().subscribe((res) => {
          this.Router.navigate(['welcome'])
        }, err => {
          console.log(err)
        })
      }
    });


    this.APIService.getAllUsers().subscribe((users) => {
        console.log(users)
      },
      (err) => {
        console.log(err)
      })
  }
}

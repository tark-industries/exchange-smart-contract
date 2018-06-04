import {Component, OnInit} from '@angular/core';
import {APIService} from "../../service/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private APIService:APIService) {
  }

  ngOnInit() {

    this.APIService.checkAuthentication().subscribe((auth)=> {
      if(!auth.registered) {
        this.APIService.registerUserByUID().subscribe((res)=> {
          debugger
          console.log(res)
        },err => {
          debugger
          console.log(err)
        })
      }

    })
  }

}

import { User } from './../user';

import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

   user1=new User();
   msg='';
  constructor(private _service: RegistrationService, private _route :Router ) { }

  ngOnInit(): void {
  }
  loginUser(){
            this._service.loginUserFromRemote(this.user1).subscribe(
              data => {
                         console.log("response received");
                         this._route.navigate(['/loginsuccess'])},
              error => {
                           console.log("exception occured")
                           this.msg="Bad credential,please enter valid email id and password";}
            )
 }

 gotoregistration(){
  this._route.navigate(['/signup'])
 }

}

import { Component, OnInit } from '@angular/core';
import { User } from './../user';

import { RegistrationService } from './../registration.service';
import {NgForm} from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user1=new User();
  msg='';
 constructor(private _service: RegistrationService, private _route :Router ) { }

  ngOnInit(): void {
    
  }

  registerUser(){
    this._service.registerUserFromRemote(this.user1).subscribe(
      data => {
                 console.log("response received");
                 this.msg="Account is created" ;
                this._route.navigate(['/login'])
              },
      error => {
                   console.log("exception occured")
                   this.msg=error.error;
                   
                   }
    )
}


  gotologinpage(){
    this._route.navigate(['/login'])
   }

}

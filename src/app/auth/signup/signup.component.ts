import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from "../auth.service";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password; // firebase requires a password which is 6 characters long .. so validate accoordingly
    this.authService.signupUser(email , password);
  }

}

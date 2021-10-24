import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  form = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
  });

  constructor(private service: UserService) {
  }

  login() {
    this.service.login(this.emailControl.value);
  }

  ngOnInit(): void {
  }

}

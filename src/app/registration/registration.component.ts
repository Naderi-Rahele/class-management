import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormRadioOption } from '../shared/form-radio-button/extra';
import { FormSelectOption } from '../shared/form-select/extra';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confrimAgreementControl = new FormControl('', [Validators.required]);
  educationControl = new FormControl('', [Validators.required]);

  form = new FormGroup({
    email: this.emailControl,
    password: this.passwordControl,
    confirmPassword: this.confirmPasswordControl,
    confrimAgreement: this.confrimAgreementControl,
    education: this.educationControl,
  });
  educationList = [
    new FormSelectOption(1, 'Associate'),
    new FormSelectOption(2, 'Bachelor'),
    new FormSelectOption(3, 'Master'),
    new FormSelectOption(4, 'Doctoral')
  ]
  genderList = [
    new FormRadioOption(1, 'Man'),
    new FormRadioOption(2, 'Female'),
  ]

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {

  }

}

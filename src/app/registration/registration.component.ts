import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormRadioOption } from '../shared/form-radio-button/extra';
import { FormSelectOption } from '../shared/form-select/extra';
import { RegistrationModel } from '../models/registration-model';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  emailControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confirmPasswordControl = new FormControl('', [Validators.required, Validators.minLength(6)]);
  confrimAgreementControl = new FormControl('', [Validators.requiredTrue]);
  educationControl = new FormControl('');
  genderControl = new FormControl('');

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

  constructor(public service: UserService,
    private toastService: MatSnackBar,
    private router: Router) {

  }

  addRegistration() {
    if (this.form.invalid) {
      return;
    }
    var model = new RegistrationModel(this.emailControl.value, this.passwordControl.value, this.educationControl.value, this.genderControl.value);
    this.service.add(model).subscribe(res => {
      this.toastService.open('Registration added successfuly', '', {
        duration: 2000,
        panelClass: ['bg-accent'],
      });
      this.router.navigate(['/']);
      return;
    });

  }

  ngOnInit(): void {
  }

  onSubmit(event: any) {

  }

}

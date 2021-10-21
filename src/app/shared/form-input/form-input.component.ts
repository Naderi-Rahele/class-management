import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})
export class FormInputComponent implements OnInit {

  @Input() control = new FormControl();
  @Input() placeHolder?: string;
  @Input() label?: string;
  @Input() isPassword?: boolean;

  constructor() {

  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    }
    return this.control.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

}

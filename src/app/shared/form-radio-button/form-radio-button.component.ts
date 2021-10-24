import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormRadioOption } from './extra';

@Component({
  selector: 'app-form-radio-button',
  templateUrl: './form-radio-button.component.html',
  styleUrls: ['./form-radio-button.component.css']
})
export class FormRadioButtonComponent implements OnInit {
  @Input() optionList: FormRadioOption[] = [];
  @Input() label?: string;
  @Input() control = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormSelectOption } from './extra';

@Component({
  selector: 'app-form-select',
  templateUrl: './form-select.component.html',
  styleUrls: ['./form-select.component.css']
})
export class FormSelectComponent implements OnInit {
  @Input() optionList: FormSelectOption[] = [];
  @Input() label?: string;
  @Input() control = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}

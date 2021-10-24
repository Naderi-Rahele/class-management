import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-check-box',
  templateUrl: './form-check-box.component.html',
  styleUrls: ['./form-check-box.component.css']
})
export class FormCheckBoxComponent implements OnInit {
  @Input() label?: string;
  @Input() checked?: boolean;
  @Input() control = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}

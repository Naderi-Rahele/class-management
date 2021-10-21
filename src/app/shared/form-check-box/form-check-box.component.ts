import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-check-box',
  templateUrl: './form-check-box.component.html',
  styleUrls: ['./form-check-box.component.css']
})
export class FormCheckBoxComponent implements OnInit {
  @Input() label?: string;
  @Input() checked?: boolean
  constructor() { }

  ngOnInit(): void {
  }

}

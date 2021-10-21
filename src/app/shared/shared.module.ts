import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';
import { MaterialModule } from '../material.module';
import { FormSelectComponent } from './form-select/form-select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormCheckBoxComponent } from './form-check-box/form-check-box.component';
import { FormRadioButtonComponent } from './form-radio-button/form-radio-button.component'



@NgModule({
  declarations: [
    FormInputComponent,
    FormSelectComponent,
    FormCheckBoxComponent,
    FormRadioButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    FormInputComponent,
    BrowserAnimationsModule,
    FormSelectComponent,
    FormCheckBoxComponent,
    FormRadioButtonComponent
  ],
})
export class SharedModule { }


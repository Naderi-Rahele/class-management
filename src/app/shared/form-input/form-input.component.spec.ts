import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormInputComponent } from './form-input.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatFormFieldHarness } from '@angular/material/form-field/testing';
import { MatInputHarness } from '@angular/material/input/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;
  let loader: HarnessLoader;
  let formFieldHarness: MatFormFieldHarness;
  let inputHarness: MatInputHarness;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormInputComponent],
      imports: [
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule]
    })
      .compileComponents();
    fixture = TestBed.createComponent(FormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    formFieldHarness = await loader.getHarness(MatFormFieldHarness);
    inputHarness = await loader.getHarness(MatInputHarness);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate correctly', async () => {
    component.control = new FormControl('', [Validators.required]);
    await inputHarness.focus();
    await inputHarness.blur();
    const errorsBefore = await formFieldHarness.getTextErrors();
    expect(errorsBefore).toEqual(['You must enter a value']);
    await inputHarness.setValue('123');
    const errorsAfter = await formFieldHarness.getTextErrors();
    expect(errorsAfter).toEqual([]);
  });
});

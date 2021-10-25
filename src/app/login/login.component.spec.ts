import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonHarness } from '@angular/material/button/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../services/user.service';
import { FakeComponent } from '../shared/fake.component';
import { FormInputComponent } from '../shared/form-input/form-input.component';
import { FormInputHarness } from '../shared/form-input/testing/form-input-harness';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let loader: HarnessLoader;
  let emailHarness: FormInputHarness;
  let passwordHarness: FormInputHarness;
  let loginButtonHarness: MatButtonHarness;
  let userService: UserService;
  let loginSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent, FormInputComponent],
      imports: [
        RouterTestingModule.withRoutes([{ path: 'all-courses', component: FakeComponent }]),
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ],
      providers: [UserService]
    })
      .compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
    loader = TestbedHarnessEnvironment.loader(fixture);
    emailHarness = await loader.getHarness(FormInputHarness.with({ label: 'Email' }));
    passwordHarness = await loader.getHarness(FormInputHarness.with({ label: 'Password' }));
    loginButtonHarness = await loader.getHarness(MatButtonHarness);
    loginSpy = spyOn(userService, 'login');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not login when form is empty', async () => {
    await loginButtonHarness.click();
    expect(loginSpy).not.toHaveBeenCalled();
  });

  it('should login when form is valid', async () => {
    await emailHarness.setValue('aa@yahoo.com');
    await passwordHarness.setValue('123456789');
    await loginButtonHarness.click();
    expect(loginSpy).toHaveBeenCalled();
  });
});

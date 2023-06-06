import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoginComponent} from './login.component';
import {PublicRoutesModule} from '../../routes/public-routes.module';
import {ReactiveFormsModule} from '@angular/forms';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [PublicRoutesModule, ReactiveFormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('user should update from form changes', () => {
    const testUser = {
      email: 'test@test.com',
      password: '12345678'
    };

    component.loginForm.controls.email.setValue(testUser.email);
    component.loginForm.controls.password.setValue(testUser.password);

    expect(component.loginForm.value.email).toEqual(testUser.email);
    expect(component.loginForm.value.password).toEqual(testUser.password);
  });

  it('should fail whe insert a invalid email', () => {
    const testUser = {
      email: 'test',
    };

    component.loginForm.controls.email.setValue(testUser.email);
    expect(component.loginForm.get('email')?.errors?.['email']).toEqual(true);
  });

  it('should fail whe insert a invalid password', () => {
    const testUser = {
      password: '12345678'
    };

    component.loginForm.controls.email.setValue(testUser.password);
    expect(component.loginForm.get('password')?.errors?.['required']).toEqual(true);
  });

  it('#isSubmitted should toggle to true ', () => {
    const testUser = {
      email: 'test@test.com',
      password: '12345678'
    };

    component.loginForm.controls.email.setValue(testUser.email);
    component.loginForm.controls.password.setValue(testUser.password);

    component.onLogin();
    expect(component.isSubmitted).toBeTruthy();
  });
});

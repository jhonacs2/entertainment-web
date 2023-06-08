import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isSubmitted: boolean = false;
  signUpForm = this._formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]],
    rpassword: ['', [Validators.required]]
  }, {validators: this.checkIfMatchingPasswords('password', 'rpassword')});

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public onSignIn(): void {
    this.isSubmitted = true;
  }

  private checkIfMatchingPasswords(password: string, rPassword: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[password];
      const passwordConfirm = group.controls[rPassword];
      const passwordMatch = passwordInput.value !== passwordConfirm.value;
      return passwordConfirm.setErrors(passwordMatch ? {
        ...passwordConfirm.errors,
        notEquivalent: true
      } : passwordConfirm.errors);
    };
  }
}

import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  isSubmitted: boolean = false;
  signUpForm = this._formBuilder.group({
    email: [],
    password: [],
    rPassword: []
  }, {validators: this.checkIfMatchingPasswords('password', 'rPassword')});

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public onSignIn(): void {
    this.isSubmitted = true;
    console.log(this.signUpForm);
  }

  private checkIfMatchingPasswords(password: string, rPassword: string) {
    return (group: FormGroup) => {
      const passwordInput = group.controls[password];
      const passwordConfirm = group.controls[rPassword];
      const passwordMatch = passwordInput.value !== passwordConfirm.value;
      return passwordConfirm.setErrors(passwordMatch ? null : {notEquivalent: true});
    };
  }
}

import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  submitted: boolean = false;
  loginForm = this._formBuilder.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required]]
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  public onLogin(): void {
    console.log(this.loginForm.status);
    this.submitted = true;
  }
}

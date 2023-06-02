import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm = this._formBuilder.group({
    email: [''],
    password: ['']
  });

  constructor(private _formBuilder: FormBuilder) {
  }

  public onLogin(): void {
    console.log(this.loginForm.value);
  }
}

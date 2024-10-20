import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { LoginMoldel } from '../shared/model/loginModel';
import { LoginService } from '../shared/services/login.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BaseService } from '../shared/services/base.service';
import { ReactiveFormsModule } from '@angular/forms';  // Import this


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(fb: UntypedFormBuilder, public baseService:BaseService, loginForm: LoginMoldel, private afAuth: AngularFireAuth, public loginService: LoginService, private db: AngularFireDatabase, private router: Router) { }

  ngOnInit(): void {
  }

  loginDetails: LoginMoldel[] = []

  loginForm = new FormGroup({
    name: new UntypedFormControl('', [Validators.required]),
    password: new UntypedFormControl('', [Validators.required, Validators.maxLength(23)]),
    checkForm: new UntypedFormControl('false', [Validators.required])
  })

  public loginSubmit() {
    this.afAuth.signInWithEmailAndPassword(this.loginForm.controls['name'].value, this.loginForm.controls['password'].value)
    .then((userCredential) => {
      this.baseService.showSuccess('User Login successfully !!')
      // Redirect or handle successful login
      this.router.navigate(['/dashboard']);
    })
    .catch((error) => {
      this.baseService.showError('Failed to Login')
    });
}
  }


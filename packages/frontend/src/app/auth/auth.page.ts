import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { ACCESS_TOKEN } from '../core/constants/app-strings';
import { LoginUser } from '../core/model/Auth.model';
import { Errors } from '../core/model/error.model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  loginForm: FormGroup;
  errors = Errors;
  emailError = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private readonly authService: AuthService,
    private readonly loadingController: LoadingController,
    private readonly toastController: ToastController,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(this.emailError),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        this.uppercaseValidator,
      ]),
    });
  }

  uppercaseValidator(abstractControl: AbstractControl) {
    if (!abstractControl.value) return;
    const hasUpper = /[A-Z]/.test(abstractControl.value);
    if (!hasUpper) {
      return { upper: true };
    } else return null;
  }

  async login() {
    this.loginForm.markAllAsTouched();
    if (this.loginForm.invalid) return;

    const { email, password } = this.loginForm.value;

    const payload = {} as LoginUser;
    payload.email = email;
    payload.password = password;

    const loading = await this.loadingController.create({
      message: 'Please wait,we are checking our records...',
    });
    await loading.present();

    this.authService.loginUser(payload).subscribe({
      next: async (res: any) => {
        await loading.dismiss();

        localStorage.setItem(ACCESS_TOKEN, res.token);
        this.router.navigateByUrl(`/health-profile`);
      },
      error: async (err: any) => {
        console.log('err', err);

        await loading.dismiss();
        const toast = await this.toastController.create({
          message: 'Error while login into your account',
          duration: 2000,
        });
        toast.present();
        return;
      },
    });
  }
}

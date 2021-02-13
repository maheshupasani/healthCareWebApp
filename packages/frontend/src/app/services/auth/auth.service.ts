import { Injectable } from '@angular/core';
import { LOGIN_USER, LOGOUT_USER } from '../../core/constants/api-endpoint';
import {
  ACCESS_TOKEN,
  AUTHORIZATION,
  BEARER_TOKEN_PREFIX,
} from '../../core/constants/app-strings';
import { LoginUser } from '../../core/model/Auth.model';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  loginUser(payload: LoginUser) {
    const url = environment.APIURL + LOGIN_USER;

    return this.http.post(url, payload);
  }

  logout() {
    const url = environment.APIURL + LOGOUT_USER;
    const body = {};
    const headers = {} as any;
    headers[AUTHORIZATION] =
      BEARER_TOKEN_PREFIX + localStorage.getItem(ACCESS_TOKEN);

    return this.http.post(url, body, { headers });
  }
}

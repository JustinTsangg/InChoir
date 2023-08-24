import { Injectable } from '@angular/core';
import { HttpServiceService, Endpoints } from './http-service.service';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(
    private http: HttpServiceService
  ) { }

  signIn(user: string, pass: string){
    return this.http.post(
      Endpoints.signin,
      {
        username: user,
        password: pass
      }
    )
  }

  signUp(user: string, pass: string){
    return this.http.post(
      Endpoints.register,

      {
        username: user,
        password: pass
      }
    )
  }
}

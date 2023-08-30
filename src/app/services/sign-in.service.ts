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

  async signIn(user: string, pass: string): Promise<user>{
    const res = await this.http.post(
      Endpoints.signin,
      {
        username: user,
        password: pass
      }
    )
    return res.data.user as user
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

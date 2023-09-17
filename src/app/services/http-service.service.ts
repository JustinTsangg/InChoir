import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Store } from '@ngrx/store';
import { RootState } from '../store/root/root.reducer';
import { selectUser } from '../store/user/user.selectors';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(
    private store: Store<RootState>

  ) {

   }

  public async get(url: string, params?: any): Promise<any> {
    return await CapacitorHttp.get({
      url: url,
      params: params ? params : [],
      headers: this.tokenInject() 
    });
   }
   public async post(url: string, params?: any): Promise<any> {
    return await CapacitorHttp.post({
      url: url,
      params: params ? params : [],
      headers:this.tokenInject()
    });
   }

    public async put(url: string, params?: any): Promise<any> {
    return await CapacitorHttp.put({
      url: url,
      params: params ? params : [],
      headers: this.tokenInject()
    });
  }

    public async delete(url: string, params?: any): Promise<any> {
      return await CapacitorHttp.delete({
        url: url,
      params: params ? params : [],
      headers: this.tokenInject()
      });
    }

    tokenInject= () => {
      let token = ""
      this.store.select(selectUser).pipe(take(1)).subscribe((user)=> {
        if(user) token = user.jwt ? user.jwt : null
      })
      console.log("JWTTOKEN", token)
      return  token ? {authorization: `${token}`} : null
    }

}

export const Endpoints = {
  spotifyLogin: 'https://accounts.spotify.com/authorize',
  spotifyToken: 'https://accounts.spotify.com/api/token',
  signin: 'http://127.0.0.1:5000/auth/login',
  register: 'http://127.0.0.1:5000/auth/register',
  signout: 'http://127.0.0.1:5000/auth/logout',
  spotifyTokenRedirect: 'http://127.0.0.1:5000/auth/connect-spotify',
  testJwt: 'http://127.0.0.1:5000/auth/testJWT',
  userInfo: 'http://127.0.0.1:5000/userInfo/getUserDetail',
  testUserDailyData: 'http://127.0.0.1:5000/userInfo/testDailyData',

}
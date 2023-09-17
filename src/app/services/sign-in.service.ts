import { Injectable } from '@angular/core';
import { HttpServiceService, Endpoints } from './http-service.service';
import { spotifyUserDetail, user } from '../models/user.model';

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
    return {
      ...res.data.user,

    } as user
  }

  async getSpotifyUserDetail(): Promise<spotifyUserDetail>{
    const res = await this.http.get(
      Endpoints.userInfo
    )
    return res.data.Error ? null : {
      country: res.data.country,
      display_name: res.data.display_name,
      profile_image_url: res.data.images[1].url
    }
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

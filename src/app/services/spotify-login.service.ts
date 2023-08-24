import { Injectable } from '@angular/core';
import { HttpServiceService, Endpoints } from './http-service.service';
import { Browser } from '@capacitor/browser';

@Injectable({
  providedIn: 'root'
})
export class SpotifyLoginService {

  constructor(
    private http: HttpServiceService,
  ) { }

  public async getSpotifyLoginUrl(): Promise<any> {
    const scope = 'user-read-private user-read-email'
    const state = '34fFs29kd09'
    this.http.get(Endpoints.spotifyLogin, {
      client_id: 'c04641f7aa6f4a05a34b7df8cd4337ab',
      response_type: 'code',
      scope: scope,
      redirect_uri: 'http://10.0.8.12:8100/tabs/tab1',
      state: state
    }).then((res) => {
      console.log(res)
      Browser.open({ url: res.url })
    })
  }
}


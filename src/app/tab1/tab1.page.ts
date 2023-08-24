import { Component } from '@angular/core';
import { HttpServiceService } from '../services/http-service.service';
import { SpotifyLoginService } from '../services/spotify-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private spotifyLogin: SpotifyLoginService,
    private router: Router,
  ) {}

  public async test() {
    console.log(this.router.url)
    console.log(this.spotifyLogin.getSpotifyLoginUrl());
  }

}

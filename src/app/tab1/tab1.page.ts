import { Component } from '@angular/core';
import { Endpoints, HttpServiceService } from '../services/http-service.service';
import { SpotifyLoginService } from '../services/spotify-login.service';
import { Router } from '@angular/router';
import { selectUser } from '../store/user/user.selectors';
import { Store } from '@ngrx/store';
import { RootState } from '../store/root/root.reducer';
import { take } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    private spotifyLogin: SpotifyLoginService,
    private router: Router,
    private store: Store<RootState>,
    private http: HttpServiceService
  ) {}

  public test() {
    this.store.select(selectUser).pipe(take(1)).subscribe(
      user=> this.spotifyLogin.getSpotifyLoginUrl(user.id)
    )
  }

  public testJwt() {
    this.http.get(Endpoints.testJwt).then(
      res=> console.log(res)
    )
  }

}

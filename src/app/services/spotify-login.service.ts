import { Injectable } from '@angular/core';
import { HttpServiceService, Endpoints } from './http-service.service';
import { Browser } from '@capacitor/browser';
import { selectUser } from '../store/user/user.selectors';
import { map, take } from 'rxjs';
import { Store } from '@ngrx/store';
import { RootState } from '../store/root/root.reducer';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class SpotifyLoginService {
  constructor(
    private http: HttpServiceService,
    private store: Store<RootState>
  ) {}

  public async getSpotifyLoginUrl(id: number): Promise<any> {
    const scope = 'user-read-private user-read-email';
        this.http
          .get(Endpoints.spotifyLogin, {
            client_id: environment.spotifyClientId,
            response_type: 'code',
            scope: scope,
            redirect_uri: 
              Endpoints.spotifyTokenRedirect,
            state: id.toString(),
          })
          .then((res) => {
            console.log(res);
            Browser.open({ url: res.url });
          });
  }
}

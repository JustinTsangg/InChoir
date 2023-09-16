import { Component, OnInit } from '@angular/core';
import { RootState } from '../store/root/root.reducer';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { spotifyUserDetail, user } from '../models/user.model';
import { selectSpotifyUserDetail, selectUser } from '../store/user/user.selectors';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{
  spotifyUserDetail$: Observable<spotifyUserDetail>
  user$: Observable<user>
  constructor(
    private store: Store<RootState>
  ) {}

  ngOnInit(){
    this.spotifyUserDetail$ = this.store.select(selectSpotifyUserDetail)
    this.user$ = this.store.select(selectUser)
  }

  

}

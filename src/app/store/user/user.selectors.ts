import { createSelector } from '@ngrx/store';
import { selectUserState } from '../root/root.selectors';
import * as fromUser from './user.reducer';
import { user } from 'src/app/models/user.model';



export const selectUser = createSelector(
    selectUserState, 
    (state: fromUser.State):any => state.user 
)

export const selectSpotifyUserDetail = createSelector(
    selectUserState,
    (state: fromUser.State): any => state.spotifyUserDetail
)
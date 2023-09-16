import { createReducer, on } from '@ngrx/store';
import { spotifyUserDetail, user } from 'src/app/models/user.model';
import * as UserActions from './user.actions'

export const featureKey = 'user'

export interface State{
    user: user
    spotifyUserDetail?: spotifyUserDetail
}

export const initialState: State = {
    user : null
}

export const reducer = createReducer(
    initialState,
    on(UserActions.setUser, (state, action) => {
        return {
            ...state,
            user: action.user
        }
    }),

    on(UserActions.clearUser, state => {
        return initialState
    }),

    on(UserActions.setSpotifyUserDetail, (state, action) => {
        return {
            ...state,
            spotifyUserDetail: action.spotifyUserDetail
        }
    })
)
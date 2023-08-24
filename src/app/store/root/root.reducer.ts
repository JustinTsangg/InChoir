import { Action, ActionReducerMap, createReducer, on } from '@ngrx/store';
import * as fromUser from '../user/user.reducer'

export interface RootState {
    [fromUser.featureKey]: fromUser.State
}

export const reducers: ActionReducerMap<RootState> = {
    [fromUser.featureKey]: fromUser.reducer
}
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromUser from '../user/user.reducer';

export const selectUserState = createFeatureSelector<fromUser.State>(
    fromUser.featureKey
)
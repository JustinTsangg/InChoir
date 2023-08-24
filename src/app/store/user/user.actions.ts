import { createAction, props } from '@ngrx/store';
import { user } from 'src/app/models/user.model';

export const setUser = createAction(
    '[User] setUser',
    props<{
        user: user
    }>()
)

export const clearUser = createAction(
    '[User] clearUser'
)

export const signIn = createAction(
    '[User] signIn', 
    props<{
        username: string,
        password: string
    }>()
)
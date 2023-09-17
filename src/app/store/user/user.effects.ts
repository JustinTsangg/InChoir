import { Injectable } from "@angular/core";
import * as UserActions from './user.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from "@ngrx/store";
import { RootState } from "../root/root.reducer";
import { map, switchMap, tap } from "rxjs";
import { SignInService } from "src/app/services/sign-in.service";
import { selectSpotifyUserDetail, selectUser } from "./user.selectors";


@Injectable()
export class UserEffects {

    signIn$ = createEffect(()=> this.actions$.pipe(
        ofType(UserActions.signIn),
        map((action) => this.signIn.signIn(action.username, action.password) ),
        tap( async(user)=> {
            user.then(
                (user)=> this.store.dispatch(UserActions.setUser({user: user})),
            )
            .catch((err)=> console.log(err))
        }),
    ), {dispatch: false})

    afterSignIn$ = createEffect(()=> this.actions$.pipe(
        ofType(UserActions.setUser),
        tap(()=> this.store.dispatch(UserActions.getSpotifyUserDetail())),
        switchMap(()=> this.store.select(selectUser)),
    ))

    getSpotifyUserDetail$ = createEffect(()=> this.actions$.pipe(
        ofType(UserActions.getSpotifyUserDetail),
        
    ), {dispatch: false})

    constructor(
        private actions$: Actions,
        private store: Store<RootState>,
        private signIn: SignInService
      ) {
      }
}

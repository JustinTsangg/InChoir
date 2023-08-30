import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import { UserEffects } from '../user/user.effects';
import { RootState } from './root.reducer';

@Injectable()
export class RootEffects {

    constructor(
        private actions$: Actions,
        private store: Store<RootState>
    ) {
        
    }

    debug$ = createEffect(()=> this.actions$.pipe(
        tap(({ type }) => console.debug(`[NGRX] ${type} @ ${new Date(Date.now()).toLocaleString()}`))
    ), { dispatch: false })
    
}

export const rootEffects = [
    RootEffects,
    UserEffects
]

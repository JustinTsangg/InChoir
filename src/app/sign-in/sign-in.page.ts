import { Component, OnInit } from '@angular/core';
import { SignInService } from '../services/sign-in.service';
import { Store } from '@ngrx/store';
import { RootState } from '../store/root/root.selectors';
import * as UserActions from '../store/user/user.actions'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  username: string;
  pass: string;

  constructor(
    private signIn: SignInService,
    private store: Store<RootState>
  ) { 
    this.username = ""
    this.pass = ""
  }

  ngOnInit() {
  }

  userInputEvent(event: any){
    this.username = event.target.value
  }

  passInputEvent(event: any){
    this.pass = event.target.value
  }

  trySignIn(){
    this.store.dispatch(UserActions.signIn({
      username: this.username,
      password: this.pass
    }))
  }

  tryRegister(){
    console.log(`username: ${this.username}`, `password: ${this.pass}`)
    this.signIn.signUp(this.username, this.pass)
  }


}


import { Injectable } from "@angular/core";
import * as fireBase from "@angular/fire/auth";
import { AngularFireAuth } from "@angular/fire/auth";

import { Observable } from 'rxjs';
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  userData: Observable<any>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
    angularFireAuth.authState.subscribe((user)=>{
      console.log(user);
    });
  }

  /* Sign up */
  createUser(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed up!', res);
      })
      .catch(error => {
        console.log('Something is wrong:', error.message);
      });
  }

  /* Sign in */
  async login(email: string, password: string) {
    await this.angularFireAuth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('Successfully signed in!', res);
        return res;
      })
      .catch(err => {
        console.log('Something is wrong:',err.message);
      });
  }

  /* Sign out */
  logout() {
    this.angularFireAuth
      .signOut();
  }
}

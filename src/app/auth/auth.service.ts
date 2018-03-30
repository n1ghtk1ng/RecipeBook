/**
 * Created by aman on 10/10/17.
 */
import * as firebase from 'firebase';
import {Router} from '@angular/router';
import {Injectable} from "@angular/core";

@Injectable()

export class AuthService {
  token: string;

  constructor (private router: Router) {
  }

  signupUser (email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)   // this is a promise
      .catch(
        (error) => {
          console.log(error);
        }
      );
  }
  signinUser (email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {console.log(response);
          this.router.navigate(['/']);
        firebase.auth().currentUser.getToken().then(
            (token: string) => {
              this.token = token;
            }
          );
        }
      )
      .catch(
        (error) => { console.log(error);  }
      );
  }
  getToken () {
    // return firebase.auth().currentUser.getToken(); // this is an async task as
    // not only firebase retrieves the token
    // from the localstorage which is synchronous action but also checks if token is valid
    // and if it is invalid (as it is expired) tries to give us a
    // new one by reaching the backend hence asuncronous
    // this will return a promise
    firebase.auth().currentUser.getToken().then(
      (token: string) => {
        this.token = token;
      }
    );
    return this.token;
  }
  isAuthenticated() {
    return this.token != null; // if token is null => we are not authenticated
  }
  logOut () {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }
}

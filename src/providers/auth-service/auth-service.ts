import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


export class User {
  name: string;
  email: string;

  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser: User;

  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw('Please insert credentials');
    } else {
      return Observable.create(observer => {
        //Should be real call in the future
        let access = (credentials.password === "pass" && credentials.email === "email")
        this.currentUser = new User('Art', 'art@superart.com');
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    if (credentials.email === null || credentials.password === null ) {
      return Observable.throw('Please insert credentials');
    } else {
      //Should post data to backend
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      })
    }
  }

  public getUserInfo() : User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    })
  }

}

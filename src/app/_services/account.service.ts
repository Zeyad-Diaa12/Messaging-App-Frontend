import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.ApiUrl;
  private CurrentUserSource = new BehaviorSubject<User | null>(null);
  CurrentUser$ = this.CurrentUserSource.asObservable();

  constructor(private http: HttpClient) { }

  Login(model : any){
    return this.http.post<User>(this.baseUrl + 'account/login', model).pipe(
      map((response: User) => {
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.CurrentUserSource.next(user);
        }
      })
    );
  }

  Register(model : any) {
    return this.http.post<User>(this.baseUrl + 'account/register',model).pipe(
      map((response: User) => {
        const user = response;
        if(user){
          localStorage.setItem('user',JSON.stringify(user));
          this.CurrentUserSource.next(user);
        }
      })
    );
  }

  SetCurrentUser(user: User) {
      this.CurrentUserSource.next(user);
  }

  Logout() {
    localStorage.removeItem('user');
    this.CurrentUserSource.next(null);
  }
}

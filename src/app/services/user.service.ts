import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usernameSource = new BehaviorSubject<string>('');
  public username$ = this.usernameSource.asObservable();

  setUsername(username: string) {
    this.usernameSource.next(username);
  }
}
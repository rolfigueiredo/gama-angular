import { Component } from '@angular/core';
import { CounterService } from './counter.service';
import { map, debounceTime } from 'rxjs/operators'
import { Store } from '@ngrx/store';
import { AuthState } from './store/reducers/auth.reducer';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto';
  loggedUser$: Observable<any>;

  constructor(
    private store: Store<AuthState>,
    private authService: AuthService,
  ) {
    this.loggedUser$ = store.select('auth').pipe(pluck('user'));
 
    const userToken = localStorage.getItem('userToken');
 
    if (userToken) {
      authService.checkToken(userToken).subscribe((v: any) => {
        this.store.dispatch({
          type: 'SET_USER',
          payload: {
            user: {
              email: v.users[0].email,
              localId: v.users[0].localId,
            },
            token: userToken
          }
        });
      }, error => {
        localStorage.removeItem('userToken');
      });
    }
  }
 

  sair(){
    this.store.dispatch({
      type: 'LOGOUT',
    })
  }
}

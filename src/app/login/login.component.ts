import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';
import { element } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login: Cadastro = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private store: Store<AuthState>) { 
    
  }

  ngOnInit() {
    this.store.select('auth').subscribe(v => {
      console.log(v,"init");
    })
  }

  onFormSend(){
    this.authService.authUser(this.login).subscribe((v: any) => {
      localStorage.setItem('userToken', v.idToken);
      this.store.dispatch({
        type: 'SET_USER',
        payload: {
          token: v.idToken,
           user: {
             email: v.email,
             localId: v.localId,
           }

        }
      })
      alert("usuário logado com sucesso!");
    }, error => {
      console.log(error);
      console.log(error.error);

      switch (error.error.error.message) {
        case 'EMAIL_NOT_FOUND':
          alert('E-mail não cadastrado');
        break;
        case 'INVALID_PASSWORD':
          alert('Senha incorreta');
        break;
        case 'USER_DISABLED':
          alert('Usuário desabilitado');
        break;
        default:
          alert('Houve um erro');
        break;
      }
    });
  }

}

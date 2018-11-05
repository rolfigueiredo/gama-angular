import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastro: Cadastro = {
    email: '',
    password: '',
  };

  constructor(private authService: AuthService, private store: Store<AuthState>) { 
    
  }

  ngOnInit() {
  }

  onFormSend(){
    this.authService.signUP(this.cadastro).subscribe((v: any) => {
      localStorage.setItem('userToken', v.idToken);
      console.log(v);
      this.authService.authUser(this.cadastro).subscribe((v: any) => {
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
      })
    }, error => {
      console.log(error);
      console.log(error.error);

      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          alert('E-mail já existente');
        break;
        case 'TOO_MANY_ATTEMPTS_TRY_LATER':
          alert('Muitas tentativas, tente novamente mais tarde');
        break;
        case 'WEAK_PASSWORD':
          alert('A senha deve ter no mínimo 6 caracteres');
        break;
        default:
          alert('Houve um erro');
        break;
      }
    });
  }

}

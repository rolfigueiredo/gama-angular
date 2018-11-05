import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY='AIzaSyCPPfRzxlz9psjdARw-g-J7kvHvPiitwfk';
  URL='https://www.googleapis.com/identitytoolkit/v3/relyingparty/';
  constructor(private http: HttpClient) { }

  signUP(cadastro: Cadastro){
    return this.http.post(this.URL+'signupNewUser',{
      email: cadastro.email,
      password: cadastro.password,
    },{
      params: {key: this.API_KEY}
    })

  }

  authUser(login: Cadastro){
    return this.http.post(this.URL+'verifyPassword',{
      email: login.email,
      password: login.password,
    },{
      params: {key: this.API_KEY}
    })
  }

  checkToken(idToken: string) {
    return this.http.post(this.URL+'getAccountInfo', {
      idToken: idToken,
    },{
      params: {key: this.API_KEY}
    });
  }
 
}

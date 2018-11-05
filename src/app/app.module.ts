import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { BoolPipe } from './bool.pipe';
import { ContadorModule } from './contador/contador.module';
import { CepModule } from './cep/cep.module';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './store/reducers/auth.reducer';
import { AuthGuard } from './auth.guard';

const appRoutes=[
  {path: '', component: HomeComponent},
  {path: 'todos', component: TodoListComponent},
  {path: 'todos/add', component: TodoFormComponent},
  {path: 'todos/:id/edit', component: TodoFormComponent},
  {path: 'cadastrar', component: CadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cep', loadChildren: './cep/cep.module#CepModule', canActivate: [AuthGuard]},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoItemComponent,
    HomeComponent,
    TodoFormComponent,
    BoolPipe,
    LoginComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ContadorModule,
    StoreModule.forRoot({
      auth: authReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

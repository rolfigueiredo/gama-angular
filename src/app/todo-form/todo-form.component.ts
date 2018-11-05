import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthState } from '../store/reducers/auth.reducer';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todo:Todo={
    id:0,
    finished: false,
    title: '',
    description: '',
    date: '',
    userId: ''
  };
  isAdding=true;

  constructor(
    private todoService: TodoService, 
    private router: Router, 
    private store: Store<AuthState>,
    private activatedRoute: ActivatedRoute) {
    store.select('auth').subscribe(v => {
      if (v.user){
        this.todo.userId=v.user.localId;
      }
    });

    activatedRoute.params.subscribe((params) => {
      if (params.id){
        this.isAdding=false;
        this.todoService.getTodo(params.id).subscribe(todo =>{
          this.todo = todo;
        })
      }
    })
  }

  ngOnInit() {
  }

  onFormSend(){
    if (this.isAdding){
      this.todoService.addTodo(this.todo).subscribe(valor => {
        alert('To-Do adicionado com sucesso');
        this.router.navigateByUrl('/todos')
      }, error => {
        alert("Erro ao adicionar!");
      });
    }else{
      this.todoService.updateTodo(this.todo).subscribe(valor => {
        alert('To-Do editado com sucesso');
        this.router.navigateByUrl('/todos')
      }, error => {
        alert("Erro ao adicionar!");
      });
    }  

  }
}

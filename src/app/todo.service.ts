import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  URL="http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getTodos(userId: string):Observable<Todo[]>{
    return this.http.get<Todo[]>(this.URL+"users/"+userId+"/todos");
  }

  getTodo(id: number):Observable<Todo>{
    return this.http.get<Todo>(this.URL+"todos/"+id);
  }

  addTodo(todo:Todo){
    return this.http.post(this.URL+"todos", todo);
  }
  updateTodo(todo:Todo){
    return this.http.put(this.URL+"todos/"+ todo.id,todo);
  }
  deleteTodo(id: number){
    return this.http.delete(this.URL+"todos/"+ id);
  }
}

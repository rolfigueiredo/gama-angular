import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  
  @Input() item: Todo;
  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
 
  constructor() { }

  ngOnInit() {
  }

  editar(){
    this.edit.emit(this.item.id);
  }
  apagar(){
    this.delete.emit(this.item.id);
  }
}

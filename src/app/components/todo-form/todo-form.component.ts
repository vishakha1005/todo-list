import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styles: []
})
export class TodoFormComponent implements OnInit {

  todo = '';

  constructor(public todoService: TodoService,private router: Router,) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.todoService.addTodo(this.todo);
    this.todo = '';
    this.router.navigate(['/list']);
  }
}

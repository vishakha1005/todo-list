import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { ToastrService } from 'ngx-toastr';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  // @Input() todoInput;
  @Input()
  todoInput!: Todo;

  completed: boolean = false;
  todo!: Todo;

  constructor(public todoService: TodoService, private toasterService: ToastrService) { }

  ngOnInit(): void {
  }

  onChange() {
    console.log("changed");
    this.completed = !this.completed;
    this.completed ? this.toasterService.success(`Todo succesfully completed`, 'completed') : '';
  }

  onCliCk(e: any) {
    console.log("Clicked");
    console.log(e);
  }

  toggleClass(): any {
    if (this.completed) {
      // return 'list-item-success';
      return { 'list-group-item-success': this.completed, 'border-primary': this.completed };

    }
  }

  deleteTodo(item: any) {
    this.todo = item;
    this.todoService.deleteTodo(item);
    this.toasterService.error(`Todo ${item.id} Deleted!`, 'Deleted Successfuly');
  }

}

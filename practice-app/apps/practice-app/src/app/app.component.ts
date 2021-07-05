import { Todo } from './../../../../libs/data/src/lib/data';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'practice-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos: Todo[] = [{title: 'Todo 1'}, {title: 'Todo 2'}];

  constructor(private http: HttpClient) {

  }

  fetch() {
    this.http.get<Todo[]>('api/todos').subscribe((t) => (this.todos = t));
  }

  addTodo() {
    this.http.post('api/addTodo', {}).subscribe(() => {
      this.fetch();
    })
  }
}

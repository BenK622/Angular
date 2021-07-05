import { Todo } from './../../../../data/src/lib/data';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'practice-app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

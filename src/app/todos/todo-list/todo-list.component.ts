import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../../filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtroActual: filtrosValidos;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    // this.store.select('todos')
    //           .subscribe( todos => this.todos = todos );
    // El state lo puedo desestructurar y dejarlo { todo, filtro }
    // de esta forma cuando los llame no tengo que poner state.todos si no solo todos
    this.store.subscribe( state => {

      this.todos = state.todos;
      this.filtroActual = state.filtro;

    });
  }

}

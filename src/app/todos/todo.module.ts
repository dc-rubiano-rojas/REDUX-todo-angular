import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Formulario Reactivos
import { ReactiveFormsModule } from '@angular/forms';

import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoPageComponent } from './todo-page/todo-page.component';
import { FiltroPipe } from './filtro.pipe';



@NgModule({
  declarations: [TodoAddComponent, TodoFooterComponent, TodoItemComponent, TodoListComponent, TodoPageComponent, FiltroPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  // El objetivo de los modulos es encapsular para poder usar los componentes
  // fuera de este modulo hay que encapsularlo en este caso solo se encapsula
  // el TodoPageComponent porque es el componente general donde estaran todos
  // los otros modulos.
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }

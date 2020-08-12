import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { Store } from '@ngrx/store';
import * as actions from '../todo.actions';

import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';



@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  // El viewchild puedo hacer referencia a el elemento de la vista
  // ElementRef me saca la relacion al elemento html y todas las proiedades del html
  @ViewChild('inputFisico') txtInputFisico: ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;

  editando:boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {

    this.chkCompletado = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.chkCompletado.valueChanges.subscribe(valor => {
      this.store.dispatch( actions.toggle({ id: this.todo.id }) );
    });

  }

  editar(): void{
    this.editando = true;
    // this.txtInput.setValue( this.todo.texto );

    // Esto me seleccion el texto que tengo en el html
    // Solo que le damos un tiempo para que lo haga
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select();
      // this.txtInputFisico.nativeElement.focus();
    }, 1);
  }

  terminarEdicion(): void{
    this.editando = false;

    // Esto valida que el campo tiene que tener algun valor
    if ( this.txtInput.invalid ){ return; }
    // Esta valida que si no hubo cambios no se dispare la action
    if ( this.txtInput.value === this.todo.texto ){ return; }

    this.store.dispatch( actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    })
    );

  }


  borrar(): void{
    this.store.dispatch( actions.borrar({ id: this.todo.id }) );
  }

}

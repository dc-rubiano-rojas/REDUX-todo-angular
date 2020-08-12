import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../app.reducer';
import * as actions from '../../filtro/filtro.actions';
import { limpiarCompletados } from '../todo.actions';


@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual: actions.filtrosValidos = 'todos';
  filtros: actions.filtrosValidos[] = [ 'todos', 'completados', 'pendientes'];
  completado: boolean = true;

  pendientes: number = 0;

  constructor( private store: Store<AppState>) { }

  ngOnInit(): void {
    // El this.filtroActual va a ser igual del filtro que recibo del subscribe o el estado actual
    // this.store.select('filtro').subscribe( filtro => this.filtroActual = filtro );
    this.store.subscribe(state => {

      this.filtroActual = state.filtro;
    // Estoy filtrado el areglo de todos para que solo muestre los todos.completado estan en falso
    // o cuantos elementos estan pendientes
      this.pendientes = state.todos.filter( todo => !todo.completado ).length;

    });
  }

  cambiarFiltro(filtro: actions.filtrosValidos): void{
    this.store.dispatch( actions.setFiltro( { filtro }) );
  }

  limpiarCompletados(): void{
    this.store.dispatch( limpiarCompletados() );
  }

}

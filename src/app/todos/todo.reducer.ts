import { createReducer, on } from '@ngrx/store';
import { crear, toggle, editar, borrar, toggleAll, limpiarCompletados } from './todo.actions';
import { Todo } from './models/todo.model';

export const initialState: Todo[] = [
    new Todo('Salvar al mundo'),
    new Todo('Vencer a Thanos'),
    new Todo('Comprar traje de Ironman'),
    new Todo('Robar escudo del capitan america'),
];

const _todoReducer = createReducer(initialState,
// ...state quiere decir extrae cada uno de los items y regresalos de manera independiente
// new Todo( texto ) con estoy agregando un nuevo todo al final de ese nuevo arreglo
  on(crear, (state, { texto }) => [...state, new Todo( texto ) ] ),




  on(toggle, (state, { id }) => {
    return state.map( todo => {
      // Este return es del state
      // Si el todo.id que tengo es igual al id que recibo
      if ( todo.id === id ){
        // Este return es del map()
        // Si hacemos esto estamos mutando el objeto
        // todo.completado = !todo.completado;
        return {
          // Extrae todas las propiedades (...todo)
          // Pero deja el completado y que sea el opuesto
          ...todo,
          completado : !todo.completado
        };
      }else{
        return todo;
      }
    });
  }),




  // Al toner llaves en el state.map implicitamente me hace el return
  on( toggleAll, ( state, { completado } ) => state.map( todo => {
      return {
        ...todo,
        // completado:completado
        completado
      }
    })
  ),




  on(editar, (state, { id, texto }) => {
    return state.map( todo => {
      // Este return es del state
      // Si el todo.id que tengo es igual al id que recibo
      if ( todo.id === id ){
        // Este return es del map()
        // Si hacemos esto estamos mutando el objeto
        // todo.completado = !todo.completado;
        return {
          // Extrae todas las propiedades (...todo)
          // Pero deja el texto que estoy resiviendo y que sea el opuesto
          ...todo,
          // texto : texto
          texto
        };
      }else{
        return todo;
      }
    });
  }),



  // En el filter estoy diciendo regresa todos los todo cuyo id sea diferente
  // al id que estoy resiviendo
  on( borrar, (state, { id } ) =>  state.filter( todo => todo.id !== id ) ),



  on( limpiarCompletados, ( state ) =>  state.filter( todo => !todo.completado ) ),



);



export function todoReducer(state, action): Todo[] {
  return _todoReducer(state, action);
}


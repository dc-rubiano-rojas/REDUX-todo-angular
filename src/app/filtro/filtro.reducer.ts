import { createReducer, on } from '@ngrx/store';
import { setFiltro, filtrosValidos } from './filtro.actions';


// Importando el tipo filtrosValidos que cree puedo inicializar mi estado a
// partir de este tipo para de cierta forma validar
export const initialState: filtrosValidos = 'todos';


const _filtroReducer = createReducer(initialState,
    on(setFiltro, (state, { filtro }) => filtro),
    // on(noCompletados, (state, { filtro }) => state.filter( state =>  state. ))

);




export function filtroReducer(state, action) {
    return _filtroReducer(state, action);
}


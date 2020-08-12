import { createAction, props } from '@ngrx/store';


// Crear mi propio tipo de typeScript
// Tipo personalizado para asegurarnos que los tipos sean los permitidos
export type filtrosValidos = 'todos' | 'completados' | 'pendientes';


export const setFiltro = createAction(
    '[Filtro] Set Filtro',
    props<{filtro: filtrosValidos}>()
);

// export const noCompletados = createAction(
//     '[Filtro] Set Filtro',
//     props<{filtro: filtrosValidos}>()
// );



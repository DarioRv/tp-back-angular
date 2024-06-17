import { Routes } from '@angular/router';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { FormularioProductoComponent } from './productos/formulario-producto/formulario-producto.component';

export const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'formulario-producto', component: FormularioProductoComponent },
];

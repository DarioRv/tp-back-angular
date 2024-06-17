import { Routes } from '@angular/router';
import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';
import { FormularioProductoComponent } from './productos/formulario-producto/formulario-producto.component';
import { FormularioConversionComponent } from './transaccion/formulario-conversion/formulario-conversion.component';
import { ListadoTrasaccionesComponent } from './transaccion/listado-trasacciones/listado-trasacciones.component';
import { ListadoTicketsComponent } from './tickets/listado-tickets/listado-tickets.component';

export const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'formulario-producto', component: FormularioProductoComponent },
  { path: 'formulario-transaccion', component: FormularioConversionComponent },
  { path: 'transacciones', component: ListadoTrasaccionesComponent },
  { path: 'tickets', component: ListadoTicketsComponent },
];

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  label: string;
  routerLink: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    { label: 'Productos', routerLink: 'productos' },
    { label: 'Formulario Producto', routerLink: 'formulario-producto' },
  ];
}

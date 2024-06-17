import { Component, OnInit } from '@angular/core';
import { Ticket } from '../../interfaces/ticket.interface';
import { TicketService } from '../../services/ticket.service';
import { CategoriaPipe } from '../pipes/categoria.pipe';

@Component({
  selector: 'app-listado-tickets',
  standalone: true,
  imports: [CategoriaPipe],
  templateUrl: './listado-tickets.component.html',
  styleUrl: './listado-tickets.component.css',
})
export class ListadoTicketsComponent implements OnInit {
  tickets: Ticket[] = [];

  constructor(private ticketsService: TicketService) {}

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(params?: any): void {
    this.ticketsService.getAll(params).subscribe({
      next: (tickets) => (this.tickets = tickets),
      error: (err) => console.error(err),
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../agenda.service';
import { Contato } from '../models/contato.model';

@Component({
  selector: 'app-exibe-contatos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exibe-contatos.component.html'
})
export class ExibeContatosComponent {

  constructor(private agendaService: AgendaService) {}

  get contatos(): Contato[] {
    return this.agendaService.obterTodos();
  }

  remover(contato: Contato): void {
    this.agendaService.remover(contato);
  }

  formatarData(data: string): string {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
  }

  getIniciais(nome: string): string {
  return nome
    .split(' ')
    .slice(0, 2)
    .map(n => n[0])
    .join('')
    .toUpperCase();
  }

  getTipoBadgeClass(tipo: string): string {
  const map: { [key: string]: string } = {
    'Amigo(a)': 'badge-amigo',
    'Família': 'badge-familia',
    'Trabalho': 'badge-trabalho',
    'Conhecido(a)': 'badge-conhecido',
    'Outro': 'badge-outro',
  };

  return map[tipo] || 'badge-outro';
  }

}
import { Component, inject } from '@angular/core';
import { AgendaService } from '../model/agenda-service';

@Component({
  selector: 'app-contador-contatos',
  imports: [],
  templateUrl: './contador-contatos.html',
  styleUrl: './contador-contatos.scss',
})
export class ContadorContatos {
  #agendaService = inject(AgendaService);

  obterQuantidade(): number {
    return this.#agendaService.obterTodos().length;
  }
}
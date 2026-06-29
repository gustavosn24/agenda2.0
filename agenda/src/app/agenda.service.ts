import { Injectable } from '@angular/core';
import { Contato } from './models/contato.model';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  private contatos: Contato[] = [];

  existe(c: Contato): boolean {
    return this.contatos.find(contato =>
      contato.getEmail() === c.getEmail()
    ) !== undefined;
  }

  adicionar(c: Contato): boolean {

    if (this.existe(c)) {
      return false;
    }

    this.contatos.push(c);
    return true;
  }

  remover(c: Contato): boolean {

    const index = this.contatos.indexOf(c);

    if (index !== -1) {
      this.contatos.splice(index, 1);
      return true;
    }

    return false;
  }

  obterTodos(): Contato[] {
    return this.contatos;
  }

}
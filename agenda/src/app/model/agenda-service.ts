import { Injectable } from '@angular/core';
import { Contato } from './contato';

@Injectable({
  providedIn: 'root',
})
export class AgendaService {
  readonly #contatos: Contato[];

  constructor() {
    this.#contatos = []
  }

  /** Adiciona um novo contato na agenda 
   * @param cc o contato a ser adicionado
   * @return true se o contato foi adicionado, false caso contrário.
  */
  existe(c: Contato): boolean {
  return this.#contatos.find(cc => cc.email === c.email) !== undefined;
}

adicionar(cc: Contato): boolean {
  if (cc && !this.existe(cc)) {
    this.#contatos.push(cc);
    return true;
  }
  return false;
}

remover(c: Contato): boolean {
  const idx = this.#contatos.indexOf(c);
  if (idx !== -1) {
    this.#contatos.splice(idx, 1);
    return true;
  }
  return false;
}

  /** Devolve todos os contatos da agenda */
  obterTodos(): Contato[] {
    return [...this.#contatos]
  }
}

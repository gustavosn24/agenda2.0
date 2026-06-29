import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { AdicionaContatoComponent } from './adiciona-contato/adiciona-contato.component';
import { ExibeContatosComponent } from './exibe-contatos/exibe-contatos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    AdicionaContatoComponent,
    ExibeContatosComponent
  ],
  template: `
    <app-header></app-header>

    <app-adiciona-contato></app-adiciona-contato>

    <hr>

    <app-exibe-contatos></app-exibe-contatos>
  `
})
export class AppComponent {}
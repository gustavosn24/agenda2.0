import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header style="background:#1976d2;color:white;padding:20px;text-align:center;">
      <h1>Agenda de Contatos</h1>
      <p>Cadastro utilizando Angular + Services</p>
    </header>
  `
})
export class HeaderComponent {}
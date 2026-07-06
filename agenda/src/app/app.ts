import { Component, signal } from '@angular/core';
import { ExibeContatos } from "./exibe-contatos/exibe-contatos";
import { AdicionaContato } from "./adiciona-contato/adiciona-contato";
import { ContadorContatos } from "./contador-contatos/contador-contatos";

@Component({
  selector: 'app-root',
  imports: [ExibeContatos, AdicionaContato, ContadorContatos],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('agenda');
}
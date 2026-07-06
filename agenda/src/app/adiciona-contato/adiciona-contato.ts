import { Component, inject } from '@angular/core';
import { AgendaService } from '../model/agenda-service';
import { TipoContato } from '../model/contato';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-adiciona-contato',
  imports: [ReactiveFormsModule],
  templateUrl: './adiciona-contato.html',
  styleUrl: './adiciona-contato.scss',
})

export class AdicionaContato {

  TipoContato = TipoContato
  #agendaService = inject(AgendaService)  
  #fb = inject(FormBuilder)
  protected formContato: FormGroup;

  constructor() {
    this.formContato = this.#fb.group({
      nome: [''],
      email:  [''],
      aniversario: [''],
      telefone: [''],
      tipo: ['']
    })
  }

  
  adicionar() {
    const contato = this.formContato.value
    this.#agendaService.adicionar(contato);
    this.formContato.reset({
      tipo: TipoContato.AMIGO
    });
  }
}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Contato, TipoContato } from '../models/contato.model';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-adiciona-contato',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './adiciona-contato.component.html',
  styleUrls: ['./adiciona-contato.component.css'],
})
export class AdicionaContatoComponent implements OnInit {
  formulario!: FormGroup;
  tiposContato = Object.values(TipoContato);
  mensagemSucesso: string = '';
  contatoEditandoIndex: number | null = null;

  constructor(
  private fb: FormBuilder,
  private agendaService: AgendaService
) {}

  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(2)]],
      telefone: [
        '',
        [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)],
      ],
      email: ['', [Validators.required, Validators.email]],
      aniversario: ['', Validators.required],
      tipo: ['', Validators.required],
    });
  }

  onSubmit(): void {

  if (this.formulario.invalid) {
    this.formulario.markAllAsTouched();
    return;
  }

  const { nome, telefone, email, aniversario, tipo } =
    this.formulario.value;

  const contato = new Contato(
    nome,
    telefone,
    email,
    aniversario,
    tipo
  );

  if (this.contatoEditandoIndex === null) {

    if (this.agendaService.adicionar(contato)) {
      this.mensagemSucesso = `Contato "${nome}" adicionado com sucesso!`;
    } else {
      this.mensagemSucesso = 'Contato já cadastrado!';
      return;
    }

  }

  this.formulario.reset();

  setTimeout(() => {
    this.mensagemSucesso = '';
  }, 3000);

}

  isInvalid(campo: string): boolean {
    const control = this.formulario.get(campo);
    return !!(control && control.invalid && control.touched);
  }

  formatarData(data: string): string {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
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

  getIniciais(nome: string): string {
    return nome
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase();
  }

  
}


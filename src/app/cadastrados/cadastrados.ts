import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PessoaService } from '../service/pessoa-service';
import { Pessoa } from '../model/pessoa';

@Component({
  selector: 'app-cadastrados',
  imports: [RouterLink, Pessoa, PessoaService],
  templateUrl: './cadastrados.html',
  styleUrl: './cadastrados.css',
})
export class Cadastrados {
  id = 0
  nome = ''
  email = ''
  cpf = 0.0
  data = ''

  constructor(private pessoaService: Pessoa) { }

  salvar() {
    this.pessoaService.adicionar({
      id: this.id,
      nome: this.nome,
      email: this.email,
      cpf: this.cpf,
      data: this.data
    });
  }
}

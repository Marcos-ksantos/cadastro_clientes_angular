import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PessoaService } from '../service/pessoa-service';
import { Pessoa } from '../model/pessoa';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastrados',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cadastrados.html',
  styleUrl: './cadastrados.css',
})
export class Cadastrados {
  id = 0
  nome = ''
  email = ''
  cpf = 0.0
  data = ''

  pessoa: Pessoa[] = []

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.pessoa = this.pessoaService.listar();
  }

  limparTudo() {
    this.pessoa.length = 0;
  }

}

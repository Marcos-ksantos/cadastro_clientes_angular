import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PessoaService } from '../../service/pessoa-service';
import { Pessoa } from '../../model/pessoa';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrados',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './cadastrados.html',
  styleUrl: './cadastrados.css',
})
export class Cadastrados {


  constructor(
    private router: Router,
    private pessoaService: PessoaService
  ) {}

  ngOnInit() {
    return this.pessoaService.listar();
  }

  excluir(pObjPessoa: Pessoa) {

    // Solicita confirmação antes de excluir.
    if (confirm("Tem certeza que deseja Excluir a Pessoa?")) {
      // Remove a pessoa pelo ID.
      this.pessoaService.excluir(Number(pObjPessoa.id));
    }

    // Atualiza a lista após a exclusão.
    this.ngOnInit();
  }

  // Navega para a tela de edição da pessoa selecionada.
  buscarPorId(pObjPessoa: Pessoa) {
    // Redireciona para a rota "/cadastro/:id".
    this.router.navigate(['/cadastro', pObjPessoa.id]);
  }

}
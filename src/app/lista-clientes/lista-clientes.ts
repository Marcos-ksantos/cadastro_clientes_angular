import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from './clientes';
import { RouterLink } from '@angular/router';
import { PessoaService } from '../service/pessoa-service';
import { Pessoa } from '../model/pessoa';



@Component({
  selector: 'app-lista-clientes',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './lista-clientes.html',
  styleUrl: './lista-clientes.css',
})
export class ListaClientes {

  id = 0
  nome = ''
  email = ''
  cpf = 0.0
  data = ''
  uf = "";
  municipio = ''

  constructor(private pessoaService: PessoaService) { }
  addClientes() {
    let pessoa = new Pessoa()
    pessoa.id = this.pessoaService.listar().length + 1;
    pessoa.nome = this.nome
    pessoa.email = this.email
    pessoa.cpf = this.cpf
    pessoa.data = this.data
    pessoa.uf = this.uf
    pessoa.municipio = this.municipio

    this.pessoaService.adicionar(pessoa);

    this.nome = "";
    this.email = "";
    this.cpf = 0;
    this.data = "";
    this.municipio = "";
    this.uf = ""
  }

}
    /*cliente.idCliente = this.listaClientes.length + 1
cliente.nomeCliente = this.nome_cliente
cliente.emailCliente = this.email_cliente
cliente.cpfCliente = this.cpf_cliente
cliente.dataCliente = this.data_cliente
cliente.ufCliente = this.uf_cliente
cliente.municipioCliente = this.municipio_cliente

this.listaClientes.push(cliente)

this.id_cliente = 0
this.nome_cliente = ""
this.email_cliente = ""
this.cpf_cliente = 0
this.data_cliente = ''
this.uf_cliente = ""
this.municipio_cliente = ""

}
limparTudo (){
this.listaClientes = []
}

}*/
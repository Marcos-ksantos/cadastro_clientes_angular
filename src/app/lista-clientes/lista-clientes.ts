import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from './clientes';

@Component({
  selector: 'app-lista-clientes',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-clientes.html',
  styleUrl: './lista-clientes.css',
})
export class ListaClientes {
  id_cliente: number = 0
  nome_cliente: string = ""
  email_cliente: string = ""
  cpf_cliente: number = 0
  data_cliente: number = 0
  uf_cliente: string = ""
  municipio_cliente: string = ""
  listaClientes: Cliente[] = []


  addClientes() {
    let cliente = new Cliente()
    cliente.idCliente = this.listaClientes.length + 1
    cliente.nomeCliente = this.nome_cliente
    cliente.emailCliente = this.email_cliente
    cliente.cpfCliene = this.cpf_cliente
    cliente.dataCliente = this.data_cliente
    cliente.ufCliente = this.uf_cliente
    cliente.municipioCliente = this.municipio_cliente

    this.listaClientes.push(cliente)

    this.id_cliente = 0
    this.nome_cliente = ""
    this.email_cliente = ""
    this.cpf_cliente = 0
    this.data_cliente = 0
    this.uf_cliente = ""
    this.municipio_cliente = ""

  }
  limparTudo (){
    this.listaClientes = []
  }

}
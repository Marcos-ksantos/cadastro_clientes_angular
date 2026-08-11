import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cliente } from './clientes';
import { RouterLink } from '@angular/router';
import { PessoaService } from '../../services/pessoa/pessoa-service';
import { Pessoa } from '../../model/pessoa';
import { ActivatedRoute } from '@angular/router';
import { stringify } from 'querystring';
import { UfMunicipioServiceTs } from '../../services/uf-municipios/uf-municipio-service.ts';
import { Estado } from '../../model/estado';
import { Municipio } from '../../model/municipio';


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
  listaUfs: Estado[] = []
  municipios: Municipio[] = []


  // Armazena o ID da pessoa em edição.
  idPessoaEdit = 0;

  // Indica se o formulário está em modo de edição.
  edit = false;

  // Injeta o serviço de rotas e o serviço de pessoas.
  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private UfMunicipioServiceTs: UfMunicipioServiceTs
  ) { }

  addClientes() {
    console.log(this.nome, this.email, this.cpf, this.data);

    // Cria um novo objeto Pessoa.
    const pessoa = new Pessoa();

    // Gera um ID para a pessoa.
    pessoa.id = this.pessoaService.tamanhoArray() + 1;

    // Preenche os atributos da pessoa.
    pessoa.nome = this.nome;
    pessoa.email = this.email;
    pessoa.cpf = this.cpf;
    pessoa.data = this.data;

    // Adiciona a pessoa ao serviço.
    this.pessoaService.adicionar(pessoa);

    // Limpa os campos do formulário.
    this.limpaForm();
  }


  limpaForm() {
    this.nome = "";
    this.email = "";
    this.cpf = 0;
    this.data = "";
    this.municipio = "";
    this.uf = ""
  }

  carregaAtributos(pessoa: Pessoa) {
    this.nome = String(pessoa.nome);
    this.email = String(pessoa.email);
    this.cpf = Number(pessoa.cpf);
    this.data = String(pessoa.data);
    this.municipio = String(pessoa.municipio)
    this.uf = String(pessoa.uf)
  }

  ngOnInit() {
    //CARREGAR DADOS DOS ESTADOS
    this.carregaEstadosSelect()
    // Obtém o parâmetro "id" da URL.
    const idPessoa = this.route.snapshot.paramMap.get('id');

    // Converte o ID para número.
    this.idPessoaEdit = Number(idPessoa);

    // Se existir um ID, entra no modo de edição.
    if (idPessoa) {

      this.edit = true;

      // Busca a pessoa pelo ID.
      this.pessoaService.buscarPorId(Number(idPessoa))
        .subscribe((objPessoa) => {
          // Se encontrou a pessoa, carrega os dados no formulário.
          if (objPessoa) {
            this.carregaAtributos({ ...objPessoa });
          }
        });
    }
  }

  save() {
    // Cria um objeto Pessoa.
    const pessoa = new Pessoa();

    // Preenche os atributos.
    pessoa.nome = this.nome;
    pessoa.email = this.email;
    pessoa.cpf = this.cpf;
    pessoa.data = this.data;
    pessoa.municipio = this.municipio
    pessoa.uf = this.uf

    // Verifica se está editando ou cadastrando.
    if (this.edit) {

      // Mantém o mesmo ID.
      pessoa.id = this.idPessoaEdit;

      // Atualiza a pessoa.
      this.pessoaService.editar(pessoa);

      // Sai do modo de edição.
      this.edit = false;

    } else {

      // Gera um novo ID.
      pessoa.id = this.pessoaService.tamanhoArray() + 1;

      // Adiciona a nova pessoa.
      this.pessoaService.adicionar(pessoa);
    }

    // Limpa os campos após salvar.
    this.limpaForm();
  }

  // Atualiza uma pessoa após confirmação.
  alterar(pessoa: Pessoa) {

    // Exibe uma confirmação ao usuário.
    if (confirm("Tem certeza que deseja Alterar a Pessoa?")) {

      // Atualiza os dados da pessoa.
      this.pessoaService.editar(pessoa);
    }
  }

  carregaEstadosSelect() {
    this.UfMunicipioServiceTs.listaUF()
      .subscribe({
        next: (dadosUf) => {
          this.listaUfs = dadosUf
        },
        error: (msgErro) => {
          console.log('Erro ao carregar o Estado', msgErro)
        }
      })
  }

  carregaMunicipiosSelect() {
    if (!this.uf) {
      this.municipio = ''
      this.municipios = []

      return
    }

    this.UfMunicipioServiceTs.listaMunicipios(Number(this.uf))
      .subscribe({
        next: (dadosMunicipio) => {
          this.municipios = dadosMunicipio
        },
        error: (msgErro) => {
          console.log('Erro ao carregar o Município', msgErro)
        }
      })

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
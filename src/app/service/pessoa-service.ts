import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {
    private pessoa:Pessoa[] = []

    adicionar(pessoa: Pessoa){
        this.pessoa.push(pessoa)
    }

    listar(){
        return this.pessoa
    }
    Limpar(){
        this.pessoa = []
    }
}

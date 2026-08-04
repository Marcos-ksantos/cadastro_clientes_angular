import { injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';

@injectable(
    provideIn: 'root'
)
export class PessoaService {
    private pessoas:Pessoa[] = []

    adicionar(pessoas: Pessoa){
        this.pessoas.push(pessoas)
    }

    listar(){
        return this.pessoas
    }
}

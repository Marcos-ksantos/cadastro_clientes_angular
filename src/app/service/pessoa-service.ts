import { Injectable } from '@angular/core';
import { Pessoa } from '../model/pessoa';
import { of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PessoaService {
    private pessoa: Pessoa[] = []

    adicionar(pessoa: Pessoa) {
        this.pessoa.push(pessoa)
    }

    listar(): Pessoa[] {
        return this.pessoa
    }
    tamanhoArray(): number {
        return this.pessoa.length;
    }
    buscarPorId(id: number) {
        // Procura a pessoa cujo ID seja igual ao informado.
        const pessoa = this.pessoa.find(elem => elem.id == id);

        // Retorna a pessoa encontrada como Observable.
        return of(pessoa);
    }

    editar(pessoa: Pessoa) {

        // Encontra a posição da pessoa no array pelo ID.
        const posArray = this.pessoa.findIndex(elem => elem.id === pessoa.id);

        // Se encontrou a pessoa, substitui pelos novos dados.
        if (posArray !== -1) {
            this.pessoa[posArray] = pessoa;
        }
    }


    excluir(id: number) {
        this.pessoa = this.pessoa.filter(elem => elem.id !== id)

    }
}

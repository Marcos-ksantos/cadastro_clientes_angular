
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs/dist/types/index';
import { Estado } from '../../model/estado';
import { Municipio } from '../../model/municipio';

@Injectable({
    providedIn: 'root'
})

export class UfMunicipioServiceTs {
    constructor(private http: HttpClient) { }

    listaUF(): Observable<Estado[]> {
        const apiUrl = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'

        return this.http.get<Estado[]>(apiUrl)
    }

    listaMunicipios(idUf: number): Observable<Municipio[]> {
        const apiUrl = 'http://servicodados.ibge.gov.br/api/v1/localidades/estados/${idUf}/municipios'

        return this.http.get<Municipio[]>(apiUrl)
    }

}

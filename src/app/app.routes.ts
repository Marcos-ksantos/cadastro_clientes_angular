import { Routes } from '@angular/router';
import { ListaClientes } from './lista-clientes/lista-clientes';
import { Cadastrados } from './cadastrados/cadastrados';

export const routes: Routes = [
    { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
    {path: 'cadastro', component:ListaClientes},
    {path: 'lista', component:Cadastrados}
];

import { Routes } from '@angular/router';
import { ListaClientes } from './lista-clientes/lista-clientes';
import { Cadastrados } from './cadastrados/cadastrados';
import { Component } from '@angular/compiler';
import { InicioCadastro } from './inicio-cadastro/inicio-cadastro';

export const routes: Routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    {path: 'inicio', component:InicioCadastro},
    {path: 'cadastro', component:ListaClientes},
    {path: 'lista', component:Cadastrados}
];

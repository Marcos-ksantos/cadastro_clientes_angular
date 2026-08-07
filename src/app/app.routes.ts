import { Routes } from '@angular/router';
import { ListaClientes } from './components/lista-clientes/lista-clientes';
import { Cadastrados } from './components/cadastrados/cadastrados';
import { Component } from '@angular/compiler';
import { InicioCadastro } from './components/inicio-cadastro/inicio-cadastro';
import { Home } from './components/home/home';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path: 'inicio', component:InicioCadastro},
    {path: 'cadastro', component:ListaClientes},
    {path: 'cadastro/:id', component:ListaClientes},
    {path: 'home', component:Home},
    {path: 'lista', component:Cadastrados}
];

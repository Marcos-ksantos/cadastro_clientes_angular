import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioCadastro } from './components/inicio-cadastro/inicio-cadastro';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,InicioCadastro],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CadastroClientes');
}

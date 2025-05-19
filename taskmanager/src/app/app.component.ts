import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { UsuarioComponent } from './usuario/usuario.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CabecalhoComponent, UsuarioComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taskmanager';
} 

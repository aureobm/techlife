import { Component } from '@angular/core';
import { USUARIOS } from './usuarios.dummy';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  usuarioSelecionado = USUARIOS[0];

  constructor() {
    let indice = Math.floor( Math.random() * USUARIOS.length) ;
    this.usuarioSelecionado = USUARIOS[indice];
  }

  get imagemUrl(): string {
    return "./assets/usuarios/" + this.usuarioSelecionado.avatar + ".jpg"
  }

  selecionarUsuario(): void {
    let indice = Math.floor( Math.random() * USUARIOS.length) ;
    this.usuarioSelecionado = USUARIOS[indice];
  }
}

import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { UsuariosListar } from './usuarios-listar/usuarios-listar';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-usuarios',
  imports: [RouterOutlet,UsuariosListar,Menu],
  templateUrl: './usuarios.html',
  styleUrl: './usuarios.css',
})
export class Usuarios {
  constructor(public route:ActivatedRoute){}

}

import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { UsuariosListar } from '../usuarios/usuarios-listar/usuarios-listar';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { DepartamentosListar } from "./departamentos-listar/departamentos-listar";

@Component({
  selector: 'app-departamentos',
  imports: [RouterOutlet, Menu, DepartamentosListar],
  templateUrl: './departamentos.html',
  styleUrl: './departamentos.css',
})
export class Departamentos {
  constructor(public route:ActivatedRoute){}

}

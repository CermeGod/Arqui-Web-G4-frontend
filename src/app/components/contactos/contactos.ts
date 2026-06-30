import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';
import { ContactosListar } from './contactos-listar/contactos-listar';

@Component({
  selector: 'app-contactos',
  imports: [RouterOutlet, Menu, ContactosListar],
  templateUrl: './contactos.html',
  styleUrl: './contactos.css',
})
export class Contactos {
  constructor(public route: ActivatedRoute) {}
}

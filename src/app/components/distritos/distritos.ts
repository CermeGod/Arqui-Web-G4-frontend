import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';
import { DistritosListar } from './distritos-listar/distritos-listar';

@Component({
  selector: 'app-distritos',
  imports: [RouterOutlet, Menu, DistritosListar],
  templateUrl: './distritos.html',
  styleUrl: './distritos.css',
})
export class Distritos {
constructor(public route:ActivatedRoute){}
}

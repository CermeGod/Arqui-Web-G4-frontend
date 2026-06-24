import { Component } from '@angular/core';
import { ProviniciasListar } from './provinicias-listar/provinicias-listar';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Menu } from '../menu/menu';

@Component({
  selector: 'app-provincias',
  imports: [RouterOutlet, ProviniciasListar,Menu],
  templateUrl: './provincias.html',
  styleUrl: './provincias.css',
})
export class Provincias {
  constructor(public route: ActivatedRoute) {}

}

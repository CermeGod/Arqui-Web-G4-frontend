import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Contacto } from '../../../models/Contacto';
import { Contactosservices } from '../../../services/contactoservices';

@Component({
  selector: 'app-contactos-listar',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './contactos-listar.html',
  styleUrl: './contactos-listar.css',
})
export class ContactosListar implements OnInit {
  dataSource: MatTableDataSource<Contacto> = new MatTableDataSource();
  
  // Columnas que se renderizarán en la tabla de Angular Material
  displayedColumns: string[] = ['id', 'nombre', 'correo', 'telefono', 'mensaje', 'fecha', 'eliminar'];

  constructor(private cS: Contactosservices) {}

  ngOnInit(): void {
    this.cargarContactos();
  }

  cargarContactos() {
    this.cS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
    });
  }

  eliminar(id: number) {
    this.cS.delete(id).subscribe(() => {
      // Recarga la lista llamando de nuevo al backend tras eliminar
      this.cS.list().subscribe((data) => {
        this.dataSource.data = data;
      });
    });
  }
}
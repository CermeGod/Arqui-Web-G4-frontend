import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Departamento } from '../../../models/Departamento';
import { Departamentoservices } from '../../../services/departamentoservices';

@Component({
  selector: 'app-departamentos-listar',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './departamentos-listar.html',
  styleUrl: './departamentos-listar.css',
})
export class DepartamentosListar implements OnInit{
  dataSource: MatTableDataSource<Departamento> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];

  constructor(private dS: Departamentoservices) {}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos() {
    this.dS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
    });
  }
  eliminar(id: number) {
    this.dS.delete(id).subscribe((data) => {
      this.dS.list().subscribe((data) => {
        this.dataSource.data = data;
      });
    });
  }


}

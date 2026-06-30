import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Distrito } from '../../../models/Distrito';
import { Distritoservices } from '../../../services/distritoservices';

@Component({
  selector: 'app-distritos-listar',
  imports: [
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './distritos-listar.html',
  styleUrl: './distritos-listar.css',
})
export class DistritosListar implements OnInit {
  // Ahora dataSource maneja instancias de tu clase Distrito (con el objeto provincia dentro)
  dataSource: MatTableDataSource<Distrito> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4'];

  constructor(private dS: Distritoservices) {}

  ngOnInit(): void {
    this.cargarDistritos();
  }

  cargarDistritos() {
    this.dS.list().subscribe({
      next: (data) => {
        this.dataSource.data = data;
      },
    });
  }

  eliminar(id: number) {
    this.dS.delete(id).subscribe(() => {
      this.dS.list().subscribe((data) => {
        this.dataSource.data = data;
      });
    });
  }
}
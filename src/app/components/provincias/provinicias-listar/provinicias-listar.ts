import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { Provincia } from '../../../models/Provincia';
import { Provinciaservices } from '../../../services/provinciaservices';
import { Departamentoservices } from '../../../services/departamentoservices';

@Component({
  selector: 'app-provinicias-listar',
  imports: [MatTableModule, CommonModule, RouterLink, MatButtonModule, MatIconModule],
  templateUrl: './provinicias-listar.html',
  styleUrl: './provinicias-listar.css',
})
export class ProviniciasListar implements OnInit{
  dataSource: MatTableDataSource<Provincia> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4','c5'];
  listaDepartamentos: any[] = [];
    constructor(private pS: Provinciaservices, public dS: Departamentoservices) {}
  
ngOnInit(): void {
  // 2. Primero cargamos los departamentos una sola vez
  this.dS.list().subscribe((deps) => {
    this.listaDepartamentos = deps;

    // 3. Una vez que tenemos los departamentos, cargamos las provincias al inicio
    this.pS.list().subscribe((provs) => {
      this.mapearNombres(provs);
    });
  });

  // 4. Nos quedamos escuchando el getList() (aquí reacciona cuando eliminas)
  this.pS.getList().subscribe((provs) => {
    this.mapearNombres(provs);
  });
}

// 5. Esta es la función mágica para no repetir código
mapearNombres(provincias: any[]): void {
  provincias.forEach(p => {
    const dep = this.listaDepartamentos.find(d => d.departamentoId === p.departamentoId);
    p.nombreDep = dep ? dep.name : 'No encontrado'; // Usando .name de tu modelo
  });
  this.dataSource = new MatTableDataSource(provincias);
}

// 6. Tu método eliminar queda impecable y automático
eliminar(id: number) {
  this.pS.delete(id).subscribe({
    next: () => {
      // Después de borrar, pedimos la lista nueva al backend
      this.pS.list().subscribe((data) => { 
        this.pS.setList(data); // Esto activa el getList() de arriba y vuelve a mapear los nombres solo
      });
    }
  });

 }
}

import { Injectable } from '@angular/core';
import { environments } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Departamento } from '../models/Departamento';


const base_url=environments.base
@Injectable({
  providedIn: 'root',
})
export class Departamentoservices {
  private url = `${base_url}/Inmovision/departamento`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Departamento[]>(`${this.url}/listar-departamentos`);
  }
  insert(d: Departamento) {
    return this.http.post(`${this.url}/registrar-departamento`, d);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/eliminar-departamento/${id}`, { responseType: 'text' });
  }
  
}

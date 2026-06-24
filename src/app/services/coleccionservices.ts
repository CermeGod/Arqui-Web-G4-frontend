import { Injectable } from '@angular/core';
import { environments } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Coleccion } from '../models/Coleccion,';


const base_url=environments.base
@Injectable({
  providedIn: 'root',
})
export class Coleccionservices {
  private url = `${base_url}/Inmovision/coleccion`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Coleccion[]>(`${this.url}/listar-coleccion`);
  }
  insert(co: Coleccion) {
    return this.http.post(`${this.url}/registrar-coleccion`, co);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/eliminar-coleccion/${id}`, { responseType: 'text' });
  }
  
  
}

import { Injectable } from '@angular/core';
import { environments } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from '../models/Calificacion';



const base_url=environments.base
@Injectable({
  providedIn: 'root',
})
export class Calificacionservices {
  private url = `${base_url}/Inmovision/calificacion`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Calificacion[]>(`${this.url}/listar-calificacion`);
  }
  insert(c: Calificacion) {
    return this.http.post(`${this.url}/registrar-calificacion`, c);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/eliminar-calificacion/${id}`, { responseType: 'text' });
  }
  
}

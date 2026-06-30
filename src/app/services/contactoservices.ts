import { Injectable } from '@angular/core';
import { environments } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Contacto } from '../models/Contacto';


const base_url=environments.base
@Injectable({
  providedIn: 'root',
})
export class Contactosservices {
  private url = `${base_url}/Inmovision/contacto`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Contacto[]>(`${this.url}/listar-contacto`);
  }
  insert(con: Contacto) {
    return this.http.post(`${this.url}/registrar-contacto`, con);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/eliminar-contacto/${id}`, { responseType: 'text' });
  }
  
  
}

import { Injectable } from '@angular/core';
import { environments } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';


const base_url=environments.base
@Injectable({
  providedIn: 'root',
})
export class Usuarioservices {
  private url = `${base_url}/Inmovision/usuario`;

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Usuario[]>(`${this.url}/listar-usuario`);
  }
  insert(u: Usuario) {
    return this.http.post(`${this.url}/registrar-usuario`, u);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/eliminar-usuario/${id}`, { responseType: 'text' });
  }
  
  
}

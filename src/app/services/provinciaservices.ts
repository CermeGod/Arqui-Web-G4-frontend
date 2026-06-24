import { Injectable } from '@angular/core';
import { environments } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Provincia } from '../models/Provincia';
import { Subject } from 'rxjs';



const base_url=environments.base
@Injectable({
  providedIn: 'root',
})
export class Provinciaservices {
  private url = `${base_url}/Inmovision/provincia`;
  private listaCambio = new Subject<Provincia[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Provincia[]>(`${this.url}/listar-provincias`);
  }
  insert(p: Provincia) {
    return this.http.post(`${this.url}/registrar-provincia`, p);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/eliminar-provincia/${id}`, { responseType: 'text' });
  }

  // ¡ESTOS DOS MÉTODOS SON LOS QUE NECESITA TU LISTAR!
  setList(listaCambio: Provincia[]) {
    this.listaCambio.next(listaCambio);
  }

  getList() {
    return this.listaCambio.asObservable();
  }
  
}

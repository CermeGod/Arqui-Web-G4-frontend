import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environments } from '../../environment/environment';
import { Distrito } from '../models/Distrito';

const base_url = environments.base; // Viene de tu archivo de configuración (ej: http://localhost:8080)

@Injectable({
  providedIn: 'root',
})
export class Distritoservices {
  // Tu RequestMapping base en el backend es "/Inmovision/distrito"
  private url = `${base_url}/Inmovision/distrito`;

  constructor(private http: HttpClient) {}

  // 1. Listar Distritos -> GET /Inmovision/distrito/listar-distritos
  list(): Observable<Distrito[]> {
    return this.http.get<Distrito[]>(`${this.url}/listar-distritos`);
  }

  // 2. Eliminar Distrito -> DELETE /Inmovision/distrito/eliminar-distrito/{id}
  delete(id: number): Observable<string> {
    return this.http.delete(`${this.url}/eliminar-distrito/${id}`, { responseType: 'text' });
  }

  insert(dis: Distrito): Observable<any> {
    return this.http.post<any>(`${this.url}/registrar-distrito`, dis);
  }
}
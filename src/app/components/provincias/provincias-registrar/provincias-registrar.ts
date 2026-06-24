import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Provincia } from '../../../models/Provincia';
import { Provinciaservices } from '../../../services/provinciaservices';
import { Router } from '@angular/router';
import { Departamento } from '../../../models/Departamento';
import { Departamentoservices } from '../../../services/departamentoservices';

@Component({
  selector: 'app-provincias-registrar',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './provincias-registrar.html',
  styleUrl: './provincias-registrar.css',
})
export class ProvinciasRegistrar implements OnInit{
      
  form: FormGroup = new FormGroup({});
  id: number = 0;
  pr: Provincia=new Provincia();
  listaDepartamento: Departamento[] = [];

  edicion: boolean = false;


  constructor(
    private pS: Provinciaservices,
    private router: Router,
    private dS: Departamentoservices,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.dS.list().subscribe((data) => {
      this.listaDepartamento = data;
    });



    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      fkDepartamento: ['', Validators.required],
    });
  }
aceptar() {
    if (this.form.valid) {
      // 1. Armamos el objeto exactamente con la estructura de tu ProvinciaDTO en Java
      const provinciaDTO = {
        provinciaId: this.id, // Mandará 0 si es registro nuevo, o el ID si es edición
        nombre: this.form.value.nombre,
        departamentoId: Number(this.form.value.fkDepartamento) // <--- Nombre exacto de tu DTO
      };

      console.log("Enviando el JSON perfecto al backend:", provinciaDTO);

      // 2. Se lo enviamos al servicio. 
      // Usamos 'as any' para que TypeScript no reclame si el servicio esperaba el modelo Provincia plano.
      this.pS.insert(provinciaDTO as any).subscribe({
        next: () => {
          this.router.navigate(['/provincias']); // Te redirige al listado
        },
        error: (err) => {
          console.error("Error al registrar la provincia:", err);
        }
      });
    }
  }

}

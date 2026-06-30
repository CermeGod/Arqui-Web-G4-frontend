import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Ajusta según tu nombre real de servicio
import { Distrito } from '../../../models/Distrito';
import { Provincia } from '../../../models/Provincia';
import { Distritoservices } from '../../../services/distritoservices';
import { Provinciaservices } from '../../../services/provinciaservices';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-distritos-registrar',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule,
    CommonModule // Añadido para poder usar *ngFor en el select de provincias
    ,
    MatIcon
],
  templateUrl: './distritos-registrar.html',
  styleUrl: './distritos-registrar.css',
})
export class DistritosRegistrar implements OnInit {
  
  form: FormGroup = new FormGroup({});
  id: number = 0;
  dis: Distrito = new Distrito();
  provincias: Provincia[] = []; // Array para almacenar las provincias del backend

  edicion: boolean = false;

  constructor(
    private dS: Distritoservices,
    private pS: Provinciaservices, // Servicio inyectado para llenar el combo de provincias
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario con los campos requeridos por tu DTO de backend
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      provinciaId: ['', Validators.required]
    });

    this.cargarProvincias();
  }

  // Método para obtener las provincias y listarlas en la vista
  cargarProvincias() {
    this.pS.list().subscribe({
      next: (data) => {
        this.provincias = data;
      }
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.dis.nombre = this.form.value.nombre;
      
      // Asignamos la provincia seleccionada al objeto Distrito
      this.dis.provincia.provinciaId = this.form.value.provinciaId;

      // Recuerda verificar si tu método del servicio se llama insert() o insertar()
      this.dS.insert(this.dis).subscribe({
        next: () => {
          this.router.navigate(['/distritos']);
        },
      });
    }
  }
}
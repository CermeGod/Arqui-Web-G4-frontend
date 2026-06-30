import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { Contacto } from '../../../models/Contacto';
import { Contactosservices } from '../../../services/contactoservices';


@Component({
  selector: 'app-contactos-registrar',
  imports: [    
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './contactos-registrar.html',
  styleUrl: './contactos-registrar.css',
})
export class ContactosRegistrar implements OnInit {
  
  form: FormGroup = new FormGroup({});
  co: Contacto = new Contacto();

  constructor(
    private cS: Contactosservices,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      mensaje: ['', Validators.required],
      propiedadId: ['', Validators.required], // Mantenemos los inputs numéricos en el form
      usuarioId: ['', Validators.required]
    });
  }

  aceptar() {
    if (this.form.valid) {
      this.co.nombre = this.form.value.nombre;
      this.co.correo = this.form.value.correo;
      this.co.telefono = this.form.value.telefono;
      this.co.mensaje = this.form.value.mensaje;
      
      // Asignamos la fecha actual como un objeto Date (coincidiendo con tu modelo)
      this.co.fecha = new Date();

      // Mapeamos los IDs numéricos del formulario hacia las propiedades internas de los objetos
      this.co.propiedad.propiedadId = this.form.value.propiedadId; 
      this.co.usuario.usuarioId = this.form.value.usuarioId; 

      this.cS.insert(this.co).subscribe({
        next: () => {
          this.router.navigate(['/contactos']);
        },
      });
    }
  }
}
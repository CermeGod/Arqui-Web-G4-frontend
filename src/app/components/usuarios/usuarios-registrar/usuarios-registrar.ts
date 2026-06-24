import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Usuario } from '../../../models/Usuario';
import { Usuarioservices } from '../../../services/usuarioservices';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuarios-registrar',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatRadioModule
  ],
  templateUrl: './usuarios-registrar.html',
  styleUrl: './usuarios-registrar.css',
})
export class UsuariosRegistrar implements OnInit{

  form: FormGroup = new FormGroup({});
  usu: Usuario = new Usuario();
  fechaActual: Date = new Date();
  id: number = 0;
  today = new Date();

  edicion: boolean = false;

  constructor(
    private uS: Usuarioservices,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      apellido: ['', Validators.required],
      correo: ['', Validators.required],
      contraseña: ['', Validators.required],
      telefono: ['', Validators.required],
      foto: ['', Validators.required],
      fecha: ['', Validators.required],
      enabled: [false, Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.usu.nombre = this.form.value.name;
      this.usu.apellido = this.form.value.apellido;
      this.usu.correo = this.form.value.correo;
      this.usu.contrasena = this.form.value.contraseña;
      this.usu.telefono = this.form.value.telefono;
      this.usu.fotoUrl = this.form.value.foto;
      this.usu.fechaRegistro = this.form.value.fecha;

      this.usu.enabled = this.form.value.enabled;
      this.uS.insert(this.usu).subscribe({
        next: () => {
          this.router.navigate(['/usuarios']);
        },
      });
    }
  }



}

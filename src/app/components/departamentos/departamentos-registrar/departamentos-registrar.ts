import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Departamentoservices } from '../../../services/departamentoservices';
import { Router } from '@angular/router';
import { Departamento } from '../../../models/Departamento';

@Component({
  selector: 'app-departamentos-registrar',
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
  templateUrl: './departamentos-registrar.html',
  styleUrl: './departamentos-registrar.css',
})
export class DepartamentosRegistrar implements OnInit{
    
  form: FormGroup = new FormGroup({});
  id: number = 0;
  dp: Departamento=new Departamento();
  today = new Date();

  edicion: boolean = false;


  constructor(
    private dS: Departamentoservices,
    private router: Router,
    private formBuilder: FormBuilder,
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
    });
  }
  aceptar() {
    if (this.form.valid) {
      this.dp.name = this.form.value.name;


      this.dS.insert(this.dp).subscribe({
        next: () => {
          this.router.navigate(['/departamentos']);
        },
      });
    }
  }

}

import { Routes } from '@angular/router';

// Componentes del Sistema Base e Inicio de Sesión
import { Authenticate } from './components/authenticate/authenticate';
import { Chatbot } from './components/chatbot/chatbot';
import { VR } from './components/vr/vr';

// Guardián de Seguridad
import { seguridadGuard } from './guard/seguridad-guard';

// Componentes de Usuario
import { UsuariosListar } from './components/usuarios/usuarios-listar/usuarios-listar';
import { UsuariosRegistrar } from './components/usuarios/usuarios-registrar/usuarios-registrar';

// Componentes de Departamento
import { DepartamentosListar } from './components/departamentos/departamentos-listar/departamentos-listar';
import { DepartamentosRegistrar } from './components/departamentos/departamentos-registrar/departamentos-registrar';

// Componentes de Provincia
import { ProviniciasListar } from './components/provincias/provinicias-listar/provinicias-listar';
import { ProvinciasRegistrar } from './components/provincias/provincias-registrar/provincias-registrar';

// Componentes de Distrito
import { DistritosListar } from './components/distritos/distritos-listar/distritos-listar';
import { DistritosRegistrar } from './components/distritos/distritos-registrar/distritos-registrar';

// Componentes de Contacto
import { ContactosListar } from './components/contactos/contactos-listar/contactos-listar';
import { ContactosRegistrar } from './components/contactos/contactos-registrar/contactos-registrar';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: Authenticate,
  },

  // Módulo de Usuarios
  {
    path: 'usuarios',
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    children: [
      { path: 'lista', component: UsuariosListar },
      { path: 'nuevo', component: UsuariosRegistrar }
    ]
  },

  // Módulo de Departamentos
  {
    path: 'departamentos',
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    children: [
      { path: 'lista', component: DepartamentosListar },
      { path: 'nuevo', component: DepartamentosRegistrar }
    ]
  },

  // Módulo de Provincias
  {
    path: 'provincias',
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    children: [
      { path: 'lista', component: ProviniciasListar },
      { path: 'nuevo', component: ProvinciasRegistrar }
    ]
  },

  // Módulo de Distritos
  {
    path: 'distritos',
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    children: [
      { path: 'lista', component: DistritosListar },
      { path: 'nuevo', component: DistritosRegistrar }
    ]
  },

  // Módulo de Contactos
  {
    path: 'contactos',
    canActivate: [seguridadGuard],
    canActivateChild: [seguridadGuard],
    children: [
      { path: 'lista', component: ContactosListar },
      { path: 'nuevo', component: ContactosRegistrar }
    ]
  },

  { 
    path: 'chatbot', 
    component: Chatbot, 
    canActivate: [seguridadGuard] 
  },
  { 
    path: 'vr', 
    component: VR, 
    canActivate: [seguridadGuard] 
  }
];
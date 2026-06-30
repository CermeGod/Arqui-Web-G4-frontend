import { Routes } from '@angular/router';
import { UsuariosRegistrar } from './components/usuarios/usuarios-registrar/usuarios-registrar';
import { DepartamentosRegistrar } from './components/departamentos/departamentos-registrar/departamentos-registrar';
import { UsuariosListar } from './components/usuarios/usuarios-listar/usuarios-listar';
import { DepartamentosListar } from './components/departamentos/departamentos-listar/departamentos-listar';
import { ProviniciasListar } from './components/provincias/provinicias-listar/provinicias-listar';
import { ProvinciasRegistrar } from './components/provincias/provincias-registrar/provincias-registrar';
import { Chatbot } from './components/chatbot/chatbot';
import { VR } from './components/vr/vr';

// Componentes de Distrito
import { DistritosListar } from './components/distritos/distritos-listar/distritos-listar';
import { DistritosRegistrar } from './components/distritos/distritos-registrar/distritos-registrar';

// NUEVAS IMPORTACIONES: Componentes de Contacto
import { ContactosListar } from './components/contactos/contactos-listar/contactos-listar';
import { ContactosRegistrar } from './components/contactos/contactos-registrar/contactos-registrar';

export const routes: Routes = [

  { path: 'usuarios', component: UsuariosListar },
  { path: 'usuarios/nuevo', component: UsuariosRegistrar },

  { path: 'departamentos', component: DepartamentosListar },
  { path: 'departamentos/nuevo', component: DepartamentosRegistrar },

  { path: 'provincias', component: ProviniciasListar },
  { path: 'provincias/nuevo', component: ProvinciasRegistrar },

  { path: 'distritos', component: DistritosListar },
  { path: 'distritos/nuevo', component: DistritosRegistrar },

  // NUEVAS RUTAS: Rutas para el módulo de Contactos
  { path: 'contactos', component: ContactosListar },
  { path: 'contactos/nuevo', component: ContactosRegistrar },

  { path: 'chatbot', component: Chatbot },

  { path: 'vr', component: VR }
];
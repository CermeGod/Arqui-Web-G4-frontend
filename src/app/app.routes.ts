import { Routes } from '@angular/router';
import { UsuariosRegistrar } from './components/usuarios/usuarios-registrar/usuarios-registrar';
import { DepartamentosRegistrar } from './components/departamentos/departamentos-registrar/departamentos-registrar';
import { UsuariosListar } from './components/usuarios/usuarios-listar/usuarios-listar';
import { DepartamentosListar } from './components/departamentos/departamentos-listar/departamentos-listar';
import { ProviniciasListar } from './components/provincias/provinicias-listar/provinicias-listar';
import { ProvinciasRegistrar } from './components/provincias/provincias-registrar/provincias-registrar';
import { Chatbot } from './components/chatbot/chatbot';
import { VR } from './components/vr/vr';

export const routes: Routes = [

{ path: 'usuarios', component: UsuariosListar },
{ path: 'usuarios/nuevo', component: UsuariosRegistrar },

{ path: 'departamentos', component: DepartamentosListar },
{ path: 'departamentos/nuevo', component: DepartamentosRegistrar },

{ path: 'provincias', component: ProviniciasListar },
{ path: 'provincias/nuevo', component: ProvinciasRegistrar },

{ path: 'chatbot', component: Chatbot },

{ path: 'vr', component: VR }
];

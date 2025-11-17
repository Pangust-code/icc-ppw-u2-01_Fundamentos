import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomePage } from './features/homePage/homePage';
import { PerfilPage } from './features/perfilPage/perfilPage';
import { ProyectoPage } from './features/proyectoPage/proyectoPage';
import { ProyectoDos } from './features/proyectoDos/proyectoDos';
import { Formulario } from './features/Formulario/Formulario/FormularioPage';

export const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'perfil',
    component: PerfilPage
  },
  {
    path: 'proyectos',
    component: ProyectoPage
  },
  {
    path: 'proyecto-dos',
    component: ProyectoDos
  },
  {
    path: 'formulario',
    component: Formulario
  }
];


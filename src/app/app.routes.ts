import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { Component } from '@angular/core';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContacComponent } from './contac/contac.component';

export const routes: Routes = [
  {path: "inicio", component: InicioComponent},
  {path: "acerca-de-mi", component: AcercademiComponent},
  {path: "portafolio", component: PortafolioComponent},
  {path: "contacto", component: ContacComponent}, 

  {path: "", redirectTo: "/inicio", pathMatch: "full"}

];

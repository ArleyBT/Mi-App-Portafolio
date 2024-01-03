import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { BannerNegroComponent } from './banner-negro/banner-negro.component';
import { SeccionComponent } from './seccion/seccion.component';
import { info } from 'console';
import { InformacionComponent } from './informacion/informacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { FooterComponent } from './footer/footer.component';
import { MiportafolioComponent } from './miportafolio/miportafolio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormularioComponent } from './formulario/formulario.component';
import { InicioComponent } from './inicio/inicio.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ContacComponent } from './contac/contac.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, BodyComponent, ContenidoComponent, BannerNegroComponent, SeccionComponent, InformacionComponent, ExperienciaComponent, HabilidadesComponent, FooterComponent, MiportafolioComponent, ContactoComponent, FormularioComponent,
  InicioComponent, AcercademiComponent, PortafolioComponent, ContacComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolioapp';
}

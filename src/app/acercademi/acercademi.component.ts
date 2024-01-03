import { Component, ViewEncapsulation } from '@angular/core';
import { BannerNegroComponent } from '../banner-negro/banner-negro.component';
import { SeccionComponent } from '../seccion/seccion.component';
import { InformacionComponent } from '../informacion/informacion.component';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { HabilidadesComponent } from '../habilidades/habilidades.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-acercademi',
  standalone: true,
  imports: [BannerNegroComponent, SeccionComponent, InformacionComponent, ExperienciaComponent, HabilidadesComponent, FooterComponent],
  templateUrl: './acercademi.component.html',
  styleUrl: './acercademi.component.css',
  encapsulation: ViewEncapsulation.None,

})
export class AcercademiComponent {

}

import { Component, ViewEncapsulation } from '@angular/core';
import { BannerNegroComponent } from '../banner-negro/banner-negro.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FormularioComponent } from '../formulario/formulario.component';

@Component({
  selector: 'app-contac',
  standalone: true,
  imports: [BannerNegroComponent, ContactoComponent, FormularioComponent],
  templateUrl: './contac.component.html',
  styleUrl: './contac.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class ContacComponent {

}

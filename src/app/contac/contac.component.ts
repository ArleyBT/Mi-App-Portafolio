import { Component, ViewEncapsulation } from '@angular/core';
import { BannerNegroComponent } from '../banner-negro/banner-negro.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-contac',
    standalone: true,
    templateUrl: './contac.component.html',
    styleUrl: './contac.component.css',
    encapsulation: ViewEncapsulation.None,
    imports: [BannerNegroComponent, ContactoComponent, FormularioComponent, FooterComponent]
})
export class ContacComponent {

}

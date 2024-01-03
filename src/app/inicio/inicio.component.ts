import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BodyComponent } from '../body/body.component';
import { ContenidoComponent } from '../contenido/contenido.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [HeaderComponent, BodyComponent, ContenidoComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}

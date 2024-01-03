import { Component, ViewEncapsulation } from '@angular/core';
import { BannerNegroComponent } from '../banner-negro/banner-negro.component';
import { MiportafolioComponent } from '../miportafolio/miportafolio.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [BannerNegroComponent, MiportafolioComponent, FooterComponent],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class PortafolioComponent {

}
 
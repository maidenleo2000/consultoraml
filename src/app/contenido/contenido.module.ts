import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';



@NgModule({
  declarations: [
    NosotrosComponent,
    ServiciosComponent,
    PortfolioComponent,
    ContactoComponent
  ],
  exports: [
    NosotrosComponent,
    ServiciosComponent
  ],
  imports: [
    CommonModule,
    
  ]
  
})
export class ContenidoModule { }

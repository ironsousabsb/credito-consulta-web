import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./componentes/container/container.component";
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { ListarCreditosComponent } from './componentes/listar-creditos/listar-creditos.component';

@Component({
  selector: 'app-root',
  imports: [
    ContainerComponent, 
    ContainerComponent, 
    CabecalhoComponent,
    ListarCreditosComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CrediConsultaWeb';
}

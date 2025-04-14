// container.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CabecalhoComponent } from '../cabecalho/cabecalho.component';
import { ListarCreditosComponent } from '../../paginas/lista-creditos/lista-creditos.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CabecalhoComponent,
    ListarCreditosComponent
  ],
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {
  filtroBusca: string = '';
}

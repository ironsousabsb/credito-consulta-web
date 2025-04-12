import { Component } from '@angular/core';
import credito from './credito.json';
import { ListarCreditosComponent } from "./componentes/listar-creditos/listar-creditos.component";
import { CabecalhoComponent } from "./componentes/cabecalho/cabecalho.component";
import { ContainerComponent } from "./componentes/container/container.component";
import { FormsModule } from '@angular/forms';

interface Credito {
  numeroCredito: string;
  numeroNfse: string;
  dataConstituicao: string;
  valorIssqn: number;
  tipoCredito: string;
  simplesNacional: string;
  aliquota: number;
  valorFaturado: number;
  valorDeducao: number;
  baseCalculo: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    ListarCreditosComponent,
    CabecalhoComponent,
    ContainerComponent,
    FormsModule
  ],
  standalone: true,
})
export class AppComponent {
  title = 'CrediConsultaWeb';
  creditos: Credito[] = credito;
  filtroBusca: string = '';

  get creditosFiltrados(): Credito[] {
    if (!this.filtroBusca.trim()) {
      return this.creditos;
    }

    const termo = this.filtroBusca.toLowerCase();

    return this.creditos.filter(credito =>
      credito.numeroNfse.toLowerCase().includes(termo) ||
      credito.numeroCredito.toLowerCase().includes(termo)
    );
  }
}

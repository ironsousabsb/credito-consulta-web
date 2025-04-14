import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { CreditoService } from '../../services/credito.service';

export interface Credito {
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
  selector: 'app-listar-creditos',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './lista-creditos.component.html',
  styleUrls: ['./lista-creditos.component.css']
})
export class ListarCreditosComponent implements OnInit {
  @Input() filtroBusca: string = '';
  creditos: Credito[] = [];

  constructor(
    private creditoService: CreditoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.creditoService.obterCreditos().subscribe(listaCreditos => {
      this.creditos = listaCreditos;
    });
  }

  get creditosFiltrados(): Credito[] {
    if (!this.filtroBusca.trim()) return this.creditos;

    const termo = this.filtroBusca.toLowerCase();
    return this.creditos.filter(credito =>
      credito.numeroNfse.toLowerCase().includes(termo) ||
      credito.numeroCredito.toLowerCase().includes(termo)
    );
  }

  verDetalhes(numeroNfse: string): void {
    this.router.navigate(['/detalhe-credito', numeroNfse]);
  }

  destacar(texto: string): string {
    if (!this.filtroBusca) return texto;

    const termo = this.filtroBusca.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${termo})`, 'gi');
    return texto.replace(regex, '<mark>$1</mark>');
  }
}

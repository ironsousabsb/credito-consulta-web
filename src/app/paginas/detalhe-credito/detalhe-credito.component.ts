import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreditoService } from '../../services/credito.service';
import { Credito } from '../../paginas/lista-creditos/lista-creditos.component';

@Component({
  selector: 'app-detalhe-credito',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './detalhe-credito.component.html',
  styleUrls: ['./detalhe-credito.component.css']
})
export class DetalheCreditoComponent implements OnInit {
  credito: Credito | undefined;
  creditoId: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private creditoService: CreditoService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.creditoId = params.get('id');
      if (this.creditoId) {
        this.carregarCredito(this.creditoId);
      }
    });
  }

  carregarCredito(id: string): void {
    this.creditoService.buscarPorNFSe(id).subscribe({
      next: (creditoArray: Credito[]) => {  // Agora o TypeScript reconhece que o retorno é um array de Credito
        this.credito = creditoArray[0];  // Pega o primeiro item do array
        console.log('Crédito carregado:', this.credito);
      },
      error: erro => {
        console.error('Erro ao buscar crédito:', erro);
      }
    });
  }
}

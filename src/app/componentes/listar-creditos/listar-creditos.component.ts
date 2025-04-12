import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-creditos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-creditos.component.html',
  styleUrl: './listar-creditos.component.css'
})
export class ListarCreditosComponent {
  @Input() creditos: any[] = [];
  @Input() filtroBusca: string = '';

  destacar(texto: string): string {
    if (!this.filtroBusca) return texto;

    const termo = this.filtroBusca.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${termo})`, 'gi');
    return texto.replace(regex, '<mark>$1</mark>');
  }
}

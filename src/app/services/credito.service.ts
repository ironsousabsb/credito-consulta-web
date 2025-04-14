import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // ⬅ necessário para adaptar campos

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

@Injectable({
  providedIn: 'root'
})
export class CreditoService {
  private readonly API = 'http://localhost:8080/creditos';

  constructor(private http: HttpClient) {}

  obterCreditos(): Observable<Credito[]> {
    return this.http.get<Credito[]>(this.API);
  }

  buscarPorNFSe(id: number | string): Observable<Credito[]> {
    const url = `${this.API}/nfse/${id}`;
    return this.http.get<any>(url).pipe(
      map(api => {
        console.log('🔍 JSON bruto da API:', api);
        return api; // ← retorna direto, sem adaptar, só pra ver o conteúdo
      })
    );
  }

  salvarCredito(credito: Credito) {
    // Implementar se necessário
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class ProdutoService {
private apiUrl = 'http://localhost:8080/produtos';

constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
  }

  salvar(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  buscarPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}/${id}`);
  }
}
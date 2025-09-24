import { Component, OnInit } from '@angular/core';
import { ProdutoService } from 'src/app/services/produto/produto.service';
import { Produto } from 'src/app/models/produto.model';
import Swal from 'sweetalert2';

@Component({
selector: 'app-produto-list',
templateUrl: './produto-list.component.html'
})
export class ProdutoListComponent implements OnInit {
produtos: Produto[] = [];

constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.produtoService.listar().subscribe({
      next: (data) => {
        this.produtos = data;
      },
      error: (erro) => {
        Swal.fire('Erro', erro.error?.erro || 'Erro ao carregar produtos', 'error');
      }
    });
  }

  excluirProduto(id: number) {
    Swal.fire({
      title: 'Confirma?',
      text: 'Deseja excluir este produto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar'
    }).then((resultado) => {
      if (resultado.isConfirmed) {
        this.produtoService.deletar(id).subscribe({
          next: () => {
            this.carregarProdutos();
            Swal.fire('Excluído!', 'Produto removido com sucesso.', 'success');
          },
          error: (erro) => {
            Swal.fire('Erro', erro.error?.erro || 'Erro ao excluir produto', 'error');
          }
        });
      }
    });
  }
}

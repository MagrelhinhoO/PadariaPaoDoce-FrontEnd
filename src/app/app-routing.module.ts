import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';

const routes: Routes = [
{ path: '', redirectTo: 'produtos', pathMatch: 'full' },
{ path: 'produtos', component: ProdutoListComponent }
];

@NgModule({
imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
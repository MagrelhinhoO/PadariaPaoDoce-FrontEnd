import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { ProdutoListComponent } from './components/produto/produto-list/produto-list.component';

@NgModule({
declarations: [
AppComponent,
ProdutoListComponent
],
imports: [
BrowserModule,
AppRoutingModule,
HttpClientModule
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule {}
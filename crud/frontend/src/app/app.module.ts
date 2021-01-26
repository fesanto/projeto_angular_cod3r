import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

//importes feitos antes de fazer a navbar
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
//--------

import { HomeComponent } from './views/home/home.component';

//importes feitos antes de fazer o componente Início da navbar
import { MatCardModule } from '@angular/material/card';
//--------

import { ProductsCrudComponent } from './views/products-crud/products-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

//importe feito antes de criar o botão que navegará até a tela de criar produtos
import { MatButtonModule } from '@angular/material/button';
//--------

//importe feito antes de fazer o snackBar
import { MatSnackBarModule } from '@angular/material/snack-bar';
//-------

@NgModule({
  declarations: [ //recebe componentes, diretivas e pipes
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ProductsCrudComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

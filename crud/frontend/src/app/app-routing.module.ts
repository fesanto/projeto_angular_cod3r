import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes importandos quando iniciamos a criação das rotas
import { HomeComponent } from './views/home/home.component';
import { ProductsCrudComponent } from './views/products-crud/products-crud.component';
//------------

import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductsCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


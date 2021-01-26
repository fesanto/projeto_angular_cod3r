import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-products-crud',
  templateUrl: './products-crud.component.html',
  styleUrls: ['./products-crud.component.css']
})
export class ProductsCrudComponent implements OnInit {

  constructor(private router: Router) { } //atributo: tipo

  ngOnInit(): void {
  }

  //função do botão que navega pata tela de criar produtos
  navigateToProductCreate(): void {
    this.router.navigate(['/products/create']) //dentro do método passamos a URL que queremos que navegue. Essa rota foi definida no app-routing.module.ts 
  }

}

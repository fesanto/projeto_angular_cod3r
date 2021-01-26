import { Component, OnInit } from '@angular/core';

// importe feito para injetar o service
import { ProductService } from './../product.service';
//----------

// importe feito para inserir o router no botão cancelar e navegar para outra tela
import { Router } from '@angular/router';
//----------

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService,
    private router: Router) { } //(nome: tipo)

  ngOnInit(): void {
    
  }

  createProduct(): void {
    this.productService.showMessage('Produto criado!')
  }
  cancel(): void {
    this.router.navigate(['/products'])
  }

}

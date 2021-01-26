import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; //snack-bar é mensagem tipo toast

@Injectable({ //@injectable => essa classe pode ser injetada em outras classes
  providedIn: 'root' //service no nível de aplicação
})
export class ProductService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', { //msg e action (estar serve para fechar, pode ser um X ou undo)
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
}

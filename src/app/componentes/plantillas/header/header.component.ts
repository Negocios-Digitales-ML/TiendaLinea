import { Component, Output, EventEmitter } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { CartComponent } from '../../cart/cart.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  sidebarVisible3: boolean =false;

  @Output() show: EventEmitter<void> = new EventEmitter<void>()

    showCart(){
      this.show.emit()
    }
    
    constructor(private dialogService: DialogService){}
    openCartDialog() {
      const ref = this.dialogService.open(CartComponent, {
        header: 'Carrito de Compras',
        width: '70%',
        style: { 'max-height': '500px', overflow: 'auto' },
        baseZIndex: 10000,
      });
    }
}
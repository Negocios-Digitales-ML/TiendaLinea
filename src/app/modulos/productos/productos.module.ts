import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListaComponent } from '../../componentes/productos-lista/productos-lista.component';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { CardModule } from 'primeng/card';
import { ModprimengModule } from '../../modprimeng.module';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProductosListaComponent,
    ProductoComponent
  ],
  imports: [
    CommonModule,
    ModprimengModule,
    CardModule,
    ButtonModule,
    HttpClientModule
  ],
  exports: [
    ProductosListaComponent,
    ProductoComponent
  ]
})
export class ProductosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosListaComponent } from '../../componentes/productos-lista/productos-lista.component';
import { ProductoComponent } from '../../componentes/producto/producto.component';
import { CardModule } from 'primeng/card';
import { ModprimengModule } from '../../modprimeng.module';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';



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
    HttpClientModule,
    RatingModule,
    FormsModule, 
    DataViewModule,
    TagModule
  ],
  exports: [
    ProductosListaComponent,
    ProductoComponent
  ]
})
export class ProductosModule { }

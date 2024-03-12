import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModprimengModule } from './modprimeng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './componentes/plantillas/header/header.component';
import { FooterComponent } from './componentes/plantillas/footer/footer.component';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { ProductosModule } from './modulos/productos/productos.module';
import { CartComponent } from './componentes/cart/cart.component';
import { DialogService } from 'primeng/dynamicdialog';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ModprimengModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    SidebarModule,
    ProductosModule,
    FormsModule
  ],
  providers: [
    MessageService,
    provideClientHydration(),
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    localStorage.setItem('cart', JSON.stringify([]))
  }
 }
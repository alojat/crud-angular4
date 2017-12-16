import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';
import { VerComponent } from './ver/ver.component';
import { MonedaPipe } from './moneda.pipe';
import { FiltroProductosPipe } from './filtro-productos.pipe';

import { ProductoServiceService } from './services/producto-service.service';
import { MyDatePickerModule } from 'mydatepicker';
import * as $ from 'jquery';
import { NoencontradoComponent } from './noencontrado/noencontrado.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';

@NgModule({
  declarations: [
    AppComponent,
    ListadoComponent,
    FormularioComponent,
    VerComponent,
    MonedaPipe,
    FiltroProductosPipe,
    NoencontradoComponent
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
    FormsModule,
    HttpModule,
    SlimLoadingBarModule.forRoot(),
    RouterModule.forRoot([
      {path: '', component: ListadoComponent},
      {path: 'listado', component: ListadoComponent},
      {path: 'formulario', component: FormularioComponent},
      {path: 'detalles/:id/:tipo', component: VerComponent},
      {path: '**', component: NoencontradoComponent}
    ])
  ],
  providers: [ProductoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

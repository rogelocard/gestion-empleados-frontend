import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import {HttpClientModule} from '@angular/common/http';
import { RegistarEmpleadoComponent } from './registar-empleado/registar-empleado.component'
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    [SweetAlert2Module]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

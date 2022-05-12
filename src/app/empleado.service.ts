import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empleado } from './empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  // Esta URL optione el listado de todos los empleados del backend.
  private baseURL = "http://localhost:8080/api/v1/empleados";

  constructor(private httpClient: HttpClient) { }

  // Este metodo nos sirve para obtener los empleados...
  obtenerListaEmpleados():Observable<Empleado[]>{
      return this.httpClient.get<Empleado[]>(`${this.baseURL}`);
  }
  
  // Este metodo nos sive para guardar un nuevo empleado - guardar registro
  registrarEmpleado(empleado: Empleado) : Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, empleado)
  }

  // Este metodo nos sirve para actualizar el empleado
  actualizarEmpleado(id:number, empleado:Empleado) : Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, empleado);
  }
  // Este metodo nos sirve para obtener o buscar un empleado por su id.
  obtenerEmpleadoPorId(id:number):Observable<Empleado>{
    return this.httpClient.get<Empleado>(`${this.baseURL}/${id}`);
  }

  // Este metodo nos sirve para eliminar un empleado. 
  eliminarEmpleado(id:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}

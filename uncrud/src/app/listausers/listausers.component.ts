import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listausers',
  templateUrl: './listausers.component.html',
  styleUrls: ['./listausers.component.css']
})
export class ListausersComponent  {
  empleados = [
    {nombre: 'Ricardo', posicion: 'Diseñador'},
    {nombre: 'Daniel', posicion: 'Manager'},
    {nombre: 'Francisco', posicion: 'Programador'},
  ];
  modelo: any = {};
  modelo2: any = {};
  unValor;
  agregaEmpleado() {
    this.empleados.push(this.modelo);
    console.log(this.empleados);
  }
  eliminarEmpleado(id) {
    this.empleados.splice(id, 1);
    console.log(id);
  }
  editarEmpleado(i) {
    this.modelo2.nombre = this.empleados[i].nombre;
    this.modelo2.posicion = this.empleados[i].posicion;
    this.unValor = i;
    console.log(this.empleados[i].nombre);
  }
  actualizaEmpleado () {
    const k = this.unValor;
    for (let i = 0; i < this.empleados.length; i++ ) {
      if (i === k) {
        this.empleados[i] = this.modelo2;
        console.log(this.modelo2);
        this.modelo2 = {};
      }
    }
  }
}

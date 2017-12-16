import { Component, OnInit } from '@angular/core';
import { ProductoServiceService } from '../services/producto-service.service';
import { Router } from '@angular/router';
import "rxjs/add/operator/map";
import {IMyDpOptions} from 'mydatepicker';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  item;

  unidades = [{id:1, nombre:"UND"}, {id:2, nombre:"KG"}, {id:3, nombre:"ML"}, {id:4, nombre:"M2"}, {id:5, nombre:"M3"}];
  
  myDatePickerOptions: IMyDpOptions = {
        // other options...
        dateFormat: 'yyyy-mm-dd',
    };

  constructor(private crudProducto:ProductoServiceService, private router : Router) { 
    this.item = {pro_descripcion: null, pro_marca:null};
  }

  guardar(){
    let formData = new FormData();
    formData.append('pro_descripcion', this.item.pro_descripcion);
    formData.append('pro_unidad', this.item.pro_unidad);
    formData.append('pro_marca', this.item.pro_marca);
    formData.append('pro_observaciones', this.item.pro_observaciones);
    formData.append('pro_pcompra', this.item.pro_pcompra);
    formData.append('pro_pventa', this.item.pro_pventa);
    formData.append('pro_fcompra', this.item.pro_fcompra.formatted);
    
    this.crudProducto.guardar(formData)
    .map((response) => response.json())
    .subscribe(
      (data) => {
        if(data === true){
          console.log("Registro Guardado con Exito");
          this.router.navigate(['listado']);
          //this.router.navigate(['listado'], { queryParams: { page: this.page + 1 } })
        }else{
          console.log("Error al registrar");
          console.warn(data);
        }
      }, 
      (error) => console.log(error)
    );
  }

  ngOnInit() {
  }

}

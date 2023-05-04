import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-vehiculos',
  templateUrl: './formulario-vehiculos.component.html',
  styleUrls: ['./formulario-vehiculos.component.css']
})
export class FormularioVehiculosComponent {
  vehiculo_form= new FormGroup({
    marca: new FormControl('',Validators.required),
    color: new FormControl('',Validators.required),
    modelo: new FormControl('',Validators.required),
    placa: new FormControl('',Validators.required)
  });

  async onSubmit(){
    console.log(this.vehiculo_form.controls["marca"].value);
    console.log(this.vehiculo_form.controls["color"].value);
    console.log(this.vehiculo_form.controls["modelo"].value);
    console.log(this.vehiculo_form.controls["placa"].value);
  }

}

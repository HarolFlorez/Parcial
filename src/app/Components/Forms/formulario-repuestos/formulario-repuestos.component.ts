import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-repuestos',
  templateUrl: './formulario-repuestos.component.html',
  styleUrls: ['./formulario-repuestos.component.css']
})
export class FormularioRepuestosComponent {
  repuestosForm= new FormGroup({
    vehiculo: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
  });

  async onSubmit(){
    console.log(this.repuestosForm.controls["vehiculo"].value);
    console.log(this.repuestosForm.controls["valor"].value);
    console.log(this.repuestosForm.controls["tipo"].value);
  }

}

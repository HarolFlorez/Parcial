import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-repuestos',
  templateUrl: './formulario-repuestos.component.html',
  styleUrls: ['./formulario-repuestos.component.css']
})
export class FormularioRepuestosComponent {
  repuestos_form= new FormGroup({
    vehiculo: new FormControl('',Validators.required),
    valor: new FormControl('',Validators.required),
    tipo: new FormControl('',Validators.required),
  });

  async onSubmit(){
    console.log(this.repuestos_form.controls["vehiculo"].value);
    console.log(this.repuestos_form.controls["valor"].value);
    console.log(this.repuestos_form.controls["tipo"].value);
  }

}

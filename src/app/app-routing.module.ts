import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepuestosComponent } from './Components/repuestos/repuestos.component';
import { VehiculosComponent } from './Components/vehiculos/vehiculos.component';
import { FormularioVehiculosComponent } from './Components/Forms/formulario-vehiculos/formulario-vehiculos.component';
import { FormularioRepuestosComponent } from './Components/Forms/formulario-repuestos/formulario-repuestos.component';


const routes: Routes = [

  {path:"Vehiculos", component:VehiculosComponent},
  {path:"Repuestos", component:RepuestosComponent},
  {path:"formulario_vehiculo", component:FormularioVehiculosComponent},
  {path:"formulario_repuestos", component:FormularioRepuestosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

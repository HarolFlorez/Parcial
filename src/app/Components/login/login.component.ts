import { NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public loginService:LoginService){

  }

  em="";
  pass="";
  loginForm= new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  });

  async onSubmit(){
    this.em = this.loginForm.controls["usuario"].value;
    this.pass = this.loginForm.controls["password"].value;
    if(this.em==="usuario" && this.pass==="123"){
     Swal.fire(
  	'Good job!',
 	 'You clicked the button!',
  'success'
)
      localStorage.setItem('login','login');

      this.loginService.login.next("login");
    }else{
      Swal.fire({
        icon:"error",
        title:"Ooops..",
        text: "Datos de logueo fallidos",
        footer: "Intente: usuario: usuario contraseña: 123"
      })
    }
  }
}

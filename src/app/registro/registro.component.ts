import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { Validators,FormControl, FormGroup, } from '@angular/forms';
import { ApiService } from '../service/api.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    name: any;
    lastname: any;
    email: any
    password:any;
  
    registerForms : any =FormGroup;

  constructor(private registroService: ApiService,  private router : Router,) {
    

   }
   ngOnInit(): void {
    this.registerForms = new FormGroup({
      name: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  
  }

 guardarRegistro(){
   const  formulario=this.registerForms
   if(formulario.valid){

    this.registroService.createRegister(formulario.value.name, formulario.value.lastname
      ,formulario.value.email, formulario.value.password).subscribe((data:any)=>{
        this.registerForms= new FormGroup({
          name: new FormControl(null),
          lastname: new FormControl(null),
          email: new FormControl(null),
          password: new FormControl(null),
          
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Inicio correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        
        this.router.navigate(['login'])
      console.log(data)
    })
    
    }
   else{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Llena todos los campos',
    
    })
   }
  }

  login(){
    this.router.navigate(['login'])
  }

}

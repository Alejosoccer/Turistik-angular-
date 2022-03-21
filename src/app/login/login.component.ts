import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service'
import Swal from 'sweetalert2'
import { Login} from './login';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent  {
  registro: Login ={
    email: '',
    password: ''
  };

  user:any;

  registerForms : any =FormGroup;
  constructor(
    private api : ApiService,
    private router : Router,
  ) { }


  ngOnInit(): void {
    this.registerForms = new FormGroup({
      
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
    })
  
  }
 login(){
  const formulario = this.registerForms;
  if(formulario.valid){
  this.api.Login(formulario.value.email, formulario.value.password).subscribe((data:any)=>{
    this.registerForms = new FormGroup({
      email: new FormControl(null),
      password : new FormControl(null)
    });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Inicio correctamente',
      showConfirmButton: false,
      timer: 1500
    })
this.user=data['data']

    localStorage.setItem('token', this.user.token);
    this.router.navigate(['user']);
    console.log(this.user);
  }, error => {
    console.log(error);
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Usuario no registrado',
    
    })
  
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


 registroPague(){
  this.router.navigate(['registro'])
}

  }


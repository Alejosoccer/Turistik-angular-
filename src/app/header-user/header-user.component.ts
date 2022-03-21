import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent implements OnInit {
user:any;
id : any
  constructor(
    private api : ApiService,
    private router : Router,
  ) { }

  ngOnInit(): void {
    this.api.getToken().subscribe((data)=>{
      this.user=data
      this.id = this.user.id
     /* console.log(this.user.name)
      console.log(this.id)*/
    })
    
  }

  salir(){
    this.api.eliminarToken().subscribe((resp)=>{
     let salir=localStorage.clear();
     Swal.fire({
      icon: 'success',
      title: 'Sesion Finalizada...',
      text: 'Vuelva Pronto',
    
    })
     this.router.navigate(['/login'])
    })
  }

  perfil(){
    this.router.navigate(['perfil'])
  }

}

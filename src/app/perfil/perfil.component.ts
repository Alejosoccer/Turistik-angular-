import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../service/api.service';
import { Mountains } from '../mountains';
import { Partida } from '../partida';
import { Guia } from '../guia';
import { Reserva } from '../reserva';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  user: any
reservas : any = new Reserva();
  constructor(
    private api : ApiService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.api.getToken().subscribe((data)=>{
      this.user=data
      console.log(this.user.name)
    })
    this.api.getPerfilReservas().subscribe((data : any) => {
      this.reservas = data['data'];
      console.log(this.reservas)
    })
  }

  selectEditReserva(id : string){
    this.router.navigate(['edit-perfil/', id])
  }

  deleteReserva(id : any){
    this.api.deleteReserva(id).subscribe((data : any)=> {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Reserva Eliminada',
        showConfirmButton: false,
      
      })
      window.location.reload();
    })
  }

  regresar(){
    this.router.navigate(['user'])
  }

}

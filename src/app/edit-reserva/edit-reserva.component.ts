import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../service/api.service';
import { Partida } from '../partida';
@Component({
  selector: 'app-edit-reserva',
  templateUrl: './edit-reserva.component.html',
  styleUrls: ['./edit-reserva.component.css']
})
export class EditReservaComponent implements OnInit {

  id : any
  reserva : any
  montanasId : any
  guiaId : any
  guias : any
  montanas : any
  partida : any
  partidas:any = new Partida();
  constructor(
    private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute
  ) { this.reserva; }

  ngOnInit(): void {
    this.getPartida();
    this.activeParams.params.subscribe(params => {
      this.id = params['id']
      console.log(this.id)
      this.api.getReservaById(this.id).subscribe((data : any) => {
        this.reserva = data['data']
        this.montanasId = this.reserva.mountains_id
        console.log(this.reserva)
        console.log(this.montanasId, "ID montaña")
        this.api.getMountainsById(this.montanasId).subscribe((data : any) => {
          this.montanas = data['data']
          this.guiaId = this.montanas.guias_id
          console.log(this.guiaId)
          console.log(this.montanas)
          this.api.getGuiasById(this.guiaId).subscribe((data : any) => {
            this.guias = data['data']
            console.log(this.guias)
          })
        })
      })
     
      
    })
  }

  getPartida(){
    this.api.getPartidas().subscribe((data:any)=>{
    this.partidas=data['data']
    console.log(this.partidas)
  })
  
    }
  

    updateReserva(){
      this.api.updateReserva(this.id, this.reserva).subscribe((data : any) => {
        console.log(data);
        //alert("Publicacion Actualizada");
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Reserva actualizada correctamente',
          showConfirmButton: false,
          timer: 1500
        })
      }, error => {
        console.log(error);
      })
    }

    regresar(){
      this.router.navigate(['user'])
    }

}

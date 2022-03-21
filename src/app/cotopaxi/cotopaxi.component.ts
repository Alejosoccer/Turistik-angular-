import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ApiService } from '../service/api.service';
import { Mountains } from '../mountains';
import { Partida } from '../partida';
import { Guia } from '../guia';

@Component({
  selector: 'app-cotopaxi',
  templateUrl: './cotopaxi.component.html',
  styleUrls: ['./cotopaxi.component.css']
})
export class CotopaxiComponent implements OnInit {

  simpleAlert(){
    Swal.fire({
      title: 'Esta seguro de reservar?',
      text: "Si confirma no podra cancelar la reserva",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

id:any
montanas:any
guias:any
guia:any
partidas:any = new Partida();
formulario : any = FormGroup;

  constructor(private api : ApiService,
    private router : Router,
    private activeParams : ActivatedRoute) {this.partidas; }

  ngOnInit(): void {
    // Validamos que el formulario 
    this.formulario = new FormGroup({
      numero : new FormControl(null, [Validators.required]),
      n_personas : new FormControl(null, [Validators.required]),
      partidas_id : new FormControl(null, [Validators.required])
    });
  this.getPartida();
    this.activeParams.params.subscribe(params => {
      //sirve para recupar todos los datos ejemplo id de montana
      this.id = params['id'];
    //  console.log(this.id) 
     this.api.getMountainsById(this.id).subscribe((data:any)=>{
     this.montanas=data['data']
     console.log(this.montanas)
    this.guias=this.montanas.guias_id
    console.log(this.guias)
    this.api.getGuiasById(this.guias).subscribe((data:any)=>{
     this.guia=data['data']
     console.log(this.guia)
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

  enviarFormulario(){
    this.id
  
    const form = this.formulario
    if(form.valid){
      let data = {
        "numero" : form.value.numero,
        "n_personas" : form.value.n_personas,
       // "users_id" 
        "partidas_id" : form.value.partidas_id,
        "mountains_id" : this.id
      }

      console.log(data)
      this.api.postReserva(data).subscribe((res:any)=> {
        this.formulario = new FormGroup({
          numero : new FormControl(null),
          n_personas : new FormControl(null),
          partidas_id : new FormControl(null)
        });

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Reserva creada correctamente correctamente',
          showConfirmButton: false,
          timer: 1500
        })


//para enviar correos
this.api.getEmail().subscribe((data : any) => {
  console.log(data)
})

     
        console.log(res)
      })
     
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Llena todos los campos',
      
      })
    }

    
  }


  regresar(){
    this.router.navigate(['user'])
  }

}

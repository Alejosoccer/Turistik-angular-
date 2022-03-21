import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Mountains } from '../mountains';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  mountains:any = new Mountains();
 
  constructor(private Api:ApiService, private router : Router  ) { 
  this.mountains;

  }

  ngOnInit(): void {
  this.getMountains();

  }

 getMountains(){
 this.Api.getMontanas().subscribe((data:any)=>{
 this.mountains=data['data'];
 console.log(this.mountains)

 }) 

 }
//seleciona y manda a la montana por id para mandar la info correspondiente
 selectMountain(id : string){
  this.router.navigate(['reserva/', id])

}
  
}

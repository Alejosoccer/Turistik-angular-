import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Guia } from '../guia';

@Component({
  selector: 'app-guia',
  templateUrl: './guia.component.html',
  styleUrls: ['./guia.component.css']
})
export class GuiaComponent implements OnInit {

  guia:any = new Guia();

  constructor(private Api:ApiService) { }

  ngOnInit(): void {
    this.getGuia();
  }

  getGuia(){
    this.Api.getGuias().subscribe((data:any)=>{
    this.guia=data['data'];
    console.log(this.guia)
   
    }) 

}
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Registro } from '../registro/registro';
import { catchError } from 'rxjs/operators';
import { Mountains } from '../../app/mountains';
import { Guia } from '../../app/guia';
import { Partida } from '../../app/partida';
import { Reserva } from '../reserva';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
//url para conectar con el back
  private url='http://localhost:8000/api/auth/';
  private link = 'http://127.0.0.1:8000/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
 }
//prepara el ambienta para el intercambio de info con el mback
    constructor(private http:HttpClient) { }
//obtenemos todos los registros 
    getAll(): Observable<Registro[]> {
      return this.http.get<Registro[]>(this.url)
      .pipe(
        catchError(this.errorHandler)
      )
    }
  // crear registros y valida los campos para ser guardados en la base
    createRegister(name: string, lastname: string, email: string, password: string): Observable<Registro> {
     // creo una constante con los campos de los valores
      const formulario = new FormData()
      formulario.append('name', name);
      formulario.append('lastname', lastname);
      formulario.append('email', email);
      formulario.append('password', password);
      //return this.http.post<Registro>(this.url + '/resgister', data)
   //return this.http.post<Registro>(`${this.url}/register`, JSON.stringify(formulario), this.httpOptions)
    return this.http.post<Registro>(`${this.url}signup`, formulario)
    
  }
  

    errorHandler(error:any) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(errorMessage);
    }
//funcion para poder logiarse 
    Login(email:string,password:string):Observable<Object>{
    const Formulario=new FormData()
    Formulario.append('email',email),Formulario.append('password',password)
    return this.http.post<Registro>(`${this.url}login`, Formulario)

    }
//creamos una funcion para recuperar el token para poder loguiarse
    getToken(){
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.get(`${this.url}user`, {headers : headers})
    }
    //elimina token para cerrar sesion
    eliminarToken(){
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
      })
      return this.http.get(`${this.url}logout`, {headers : headers})
    }

    //capturar montanas
    getMontanas():Observable<Object>{
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.get<Mountains[]>(`${this.url}mountains`, {headers : headers})
    }
    // trae a todos los guias

    getGuias():Observable<Object>{
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.get<Guia[]>(`${this.url}guia`, {headers : headers})
    }

//obtenemos guias por el id
    getGuiasById(id:string):Observable<Object>{
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.get<Guia[]>(`${this.url}guia/${id}`, {headers : headers})
    }
    //capturamos las montanas 
    getMountainsById(id:string):Observable<Object>{
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.get<Mountains[]>(`${this.url}mountains/${id}`, {headers : headers})
    }
//traemos las partidas 
    getPartidaById(id:string):Observable<Object>{
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.get<Guia[]>(`${this.url}partida/${id}`, {headers : headers})
    }
    
   // traer todos los puntos de partida
   
   getPartidas():Observable<Object>{
    const user:any=localStorage.getItem('token')
    const headers=new HttpHeaders({
      Authorization: `Bearer ${user}`,
      
    })
    return this.http.get<Partida[]>(`${this.url}partida`, {headers : headers})
  }
/*  Crear una nueva reserva */
  postReserva(data : any):Observable<Object>{
    const user:any=localStorage.getItem('token')
    const headers=new HttpHeaders({
      Authorization: `Bearer ${user}`,
      
    })
    return this.http.post<Object>(`${this.url}reserva`, data, { headers : headers}) 
  }

  /** Recuapera todas las reservas creadas por el usuario y las muestra en su respectivo perfil  */
  getPerfilReservas():Observable<Object>{
    const user:any=localStorage.getItem('token')
    const headers=new HttpHeaders({
      Authorization: `Bearer ${user}`,
      
    })
    return this.http.get<Reserva[]>(`${this.url}reservaPerfil2`, {headers : headers})
  }


    deleteReserva(id: string): Observable<Object> {
      const user:any=localStorage.getItem('token')
    const headers=new HttpHeaders({
      Authorization: `Bearer ${user}`,
      
    })
    return this.http.delete<Object[]>(`${this.url}reserva/${id}`, {headers : headers})
    }

// aqui el usuario podra actualizar sus reservas
    updateReserva(id : string, data : any){
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.put<Object[]>(`${this.url}reserva/${id}`, data, {headers : headers})
    }
// vamos a recuperar las reserva mediante el id
    getReservaById(id : string):Observable<Object>{
      const user:any=localStorage.getItem('token')
      const headers=new HttpHeaders({
        Authorization: `Bearer ${user}`,
        
      })
      return this.http.get<Reserva[]>(`${this.url}reserva/${id}`, {headers : headers})
    }

    // envios de correos

    getEmail(){
      const link = 'http://127.0.0.1:8000/';
      return this.http.get(`${this.link}send-mail`)
    }
}

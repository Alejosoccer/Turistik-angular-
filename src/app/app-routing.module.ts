import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RegistroComponent } from './registro/registro.component';
import { GuiaComponent } from './guia/guia.component';
import { CotopaxiComponent } from './cotopaxi/cotopaxi.component';
import { SocialComponent } from './social/social.component';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { Modal1Component } from './modal1/modal1.component';

import { PerfilComponent } from './perfil/perfil.component';
import { EditReservaComponent } from './edit-reserva/edit-reserva.component';

const routes: Routes = [
{
  path:'login',
  component: LoginComponent
},

{
  path: 'user',
  component: UsuarioComponent
},
{
  path: 'registro',
  component: RegistroComponent
},

{
  path: 'guia',
  component:GuiaComponent
},
{
  path: 'reserva/:id',
  component:CotopaxiComponent
}
,
{
  path: 'social',
  component:SocialComponent
},

{
  path:'restablecer',
  component: RestablecerComponent
},
{
  path:'contrasena',
  component: ContrasenaComponent
},
{
  path:'modal1',
  component: Modal1Component
},

{
  path: 'perfil',
  component: PerfilComponent
},

{
  path: 'edit-perfil/:id',
  component: EditReservaComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes),],

  
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents=[]
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistroComponent } from './registro/registro.component';
import { HeaderUserComponent} from './header-user/header-user.component';
import {CardComponent}from './card/card.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GuiaComponent } from './guia/guia.component';
import { CotopaxiComponent } from './cotopaxi/cotopaxi.component';
import { SocialComponent } from './social/social.component';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RestablecerComponent } from './restablecer/restablecer.component';
import { ContrasenaComponent } from './contrasena/contrasena.component';
import { AppRoutingModule } from './app-routing.module';
import { Modal1Component } from './modal1/modal1.component';
import { Modal2Component } from './modal2/modal2.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EditReservaComponent } from './edit-reserva/edit-reserva.component';








@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LoginComponent,
    AdminComponent,
    RegistroComponent,
    HeaderUserComponent,
    CardComponent,
    FooterComponent,
    GuiaComponent,
    CotopaxiComponent,
    SocialComponent,
    RestablecerComponent,
    ContrasenaComponent,
    Modal1Component,
    Modal2Component,
    PerfilComponent,
    EditReservaComponent,
   
 
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
   
    
   
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

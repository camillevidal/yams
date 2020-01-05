import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { YamsGameComponent } from './yams-game/yams-game.component';

const appRoutes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  { path:'', component:LoginComponent},
  {path:'play',component:YamsGameComponent}
  
  

];

@NgModule({
  imports:      
  [ BrowserModule, ReactiveFormsModule, MaterialModule, BrowserAnimationsModule,BrowserModule,
    RouterModule.forRoot(appRoutes),MatToolbarModule]
,
  declarations: [ AppComponent,LoginComponent,HomeComponent,RegisterComponent,YamsGameComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { 
}

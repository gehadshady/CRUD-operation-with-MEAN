import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './add-student/add-student.component';
import {RouterModule, Routes } from '@angular/router';
import {FormsModule} from '@angular/forms'; 
import {HttpClientModule} from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';

import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { LoginComponent } from './login/login.component';
import { AddTrackComponent } from './trackComponent/add-track/add-track.component';
import { EditTrackComponent } from './trackComponent/edit-track/edit-track.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes:Routes = [
  {path:'student/create', component: AddStudentComponent},
  {path:'student/create/:token', component: AddStudentComponent},
  {path:'add-teacher', component: AddTeacherComponent},
  {path:'login', component: LoginComponent},
  {path:'addTrack', component: AddTrackComponent},
  {path:'editTrack', component: EditTrackComponent},
  {path:'tracks/:id', component: EditTrackComponent},
  {path:'**', component: LoginComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    AddTeacherComponent,
    LoginComponent,
    AddTrackComponent,
    EditTrackComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

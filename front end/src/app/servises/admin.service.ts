import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  url:string = "http://localhost:3000/";

    AddStd(std,token){
      return this.http.post(this.url+"student/create/"+token,std);
    }

    AddTeacher(teacher){
      return this.http.post(this.url,teacher);
    }

    login(user){
      return this.http.post(this.url+"login",user);
    }
    
}

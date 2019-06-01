import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../classes/student';
import {AdminService} from '../servises/admin.service';
import { TrackService } from 'src/app/servises/track.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  constructor(private adminServ:AdminService,private router: Router, private trackServ:TrackService) { }

  AllTracks:{}=[];

  ngOnInit() {
  this.AllTracks=this.trackServ.gitTracks().subscribe(
      (res)=>{this.AllTracks=res;console.log(res)},
      (error)=>{console.log(error.message)},
      ()=>{}
    )
  }


  newStd=new Student();

  addStd(newStd){
    // this.router.navigate(['/student/create',JSON.parse(localStorage.getItem('currentUserToken')).token.token]);
    this.adminServ.AddStd(newStd,JSON.parse(localStorage.getItem('currentUserToken')).token.token).subscribe(
      res=>{console.log(res)},
      error=>console.log("error "+error.message),
      ()=>{alert("done");}
    )
  }
  //29505141500183


  showInputRef(idRef){
    console.log(idRef)
    }
}

import { Component, OnInit } from '@angular/core';
import { AdminService } from '../servises/admin.service';
import { Teacher } from '../classes/teacher';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit {

  constructor(private adminServ:AdminService) { }

  newTeacher = new Teacher();
  ngOnInit() {
  }
  addTeacher(newTeacher){
     //console.log(emp)
    // this.adminServ.AddEmp(emp).subscribe(
    //   data=>console.log(data),
    //   err=>console.log(err.message),
    //   ()=>{alert("done!");this.showFirst=false}

    //)
  }

}

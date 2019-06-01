import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TrackService } from 'src/app/servises/track.service';
import { Track } from 'src/app/classes/track';

@Component({
  selector: 'app-edit-track',
  templateUrl: './edit-track.component.html',
  styleUrls: ['./edit-track.component.css']
})
export class EditTrackComponent implements OnInit {

  constructor(private trackServ:TrackService,private router: Router,) { }

  AllTracks:{}=[];
  selectedTrack=new Track();

  ngOnInit() {
    this.AllTracks=this.trackServ.gitTracks().subscribe(
      (res)=>{this.AllTracks=res;console.log(res)},
      (error)=>{console.log(error.message)},
      ()=>{}
    )
  }
  // onChange(value){
  //   console.log( this.selectedTrack._id)

  // }
  editTrack(track){
    this.router.navigate(['/tracks',track._id]);
    console.log(track)
    this.trackServ.EditTrack(track).subscribe(
      (res)=>{console.log(res)},
      (error)=>{console.log(error.message)},
      ()=>{this.ngOnInit();alert("updated ..")}
    )
  }
  deleteTrack(track){
    this.router.navigate(['/tracks',track._id]);
    console.log(track)
    this.trackServ.DeleteTrack(track).subscribe(
      (res)=>{console.log(res)},
      (error)=>{console.log(error.message)},
      ()=>{this.ngOnInit();alert("deleted ..")}
    )
  }


}

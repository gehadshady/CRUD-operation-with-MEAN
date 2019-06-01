import { Component, OnInit } from '@angular/core';
import { TrackService } from '../../servises/track.service';

@Component({
  selector: 'app-add-track',
  templateUrl: './add-track.component.html',
  styleUrls: ['./add-track.component.css']
})
export class AddTrackComponent implements OnInit {

  constructor(private trackServ:TrackService) { }

  ngOnInit() {
  }

  newTrack:String="";
  newTrackObj={Name:this.newTrack.trim()}
  addTrack(newTrack){
    this.trackServ.AddTrack({Name:this.newTrack.trim()}).subscribe(
      (res)=>{console.log(res)},
      (error)=>{alert("error")},
      ()=>{alert("done")}
   )
    console.log({Name:this.newTrack.trim()})
  }
  
}

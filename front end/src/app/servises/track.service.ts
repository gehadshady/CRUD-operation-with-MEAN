import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TrackService {

  constructor(private http: HttpClient) { }
  url:string = "http://localhost:8080/tracks";
  

  AddTrack(track){
    return this.http.post(this.url,track);
  }

  gitTracks(){
    return this.http.get(this.url);
  }

  EditTrack(track){
    return this.http.put(this.url+"/"+track._id,track);
  }

  DeleteTrack(track){
    return this.http.delete(this.url+"/"+track._id,track);
  }


}

import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})

    private ID = "6051dcf4774275c44572";
    private Secret = "7dc663c6bcba4d74ab544f264c87926fe6d6c76c"
    constructor(private http:Http) {

    // this.name="chrikin1";
  }
  getUsername(){
    return this.http.get("https://api.github.com/users/" + this.name + "?client_id=" +
     this.ID + "&client_secret=" + this.Secret).pipe(map(res => res.json()))
  }
  getRepos(){
    return this.http.get("https://api.github.com/users/" + this.name + "/repos?client_id=" +
     this.ID + "&client_secret=" + this.Secret).pipe(map(res => res.json()))
  }
  updateUsername(name:string){
    this.name=name;
  }
  }

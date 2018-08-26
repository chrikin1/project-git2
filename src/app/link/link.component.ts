import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from "rxjs/operators";
import { ApiService } from '../api-http/api.service';
@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css'],
  providers:[ApiService]
})

export class LinkComponent implements OnInit {
  username:any[];
  name: string;
  repos:any[];
  constructor(private apiService:ApiService) {

  }
  findUser() {
    this.apiService.updateUsername(this.name);
    this.apiService.getUsername().subscribe(username => {

      this.username = username;
    });
    this.apiService.getRepos().subscribe(repos => {

      this.repos= repos;
    })
  }

  ngOnInit() {
  }

}

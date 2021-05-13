import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiServiceService } from '../services/api-service.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data : any;
  employees : any;

  constructor(private _apiService : ApiServiceService) { 
  }

  getData(){
    this.employees=this._apiService.getData();
    this.employees.subscribe(data=>console.log(data.data));
  }

  ngOnInit(): void {
  }

}

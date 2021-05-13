import { Component, OnInit } from '@angular/core';
import { Journey_Route } from '../../models/route.model';
import { NgModule } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { BusService } from '../../services/bus.service';

@Component({
  selector: 'app-bus-search-result',
  templateUrl: './bus-search-result.component.html',
  styleUrls: ['./bus-search-result.component.css']
})
export class BusSearchResultComponent implements OnInit {

  availableBuses:any;
  columns:any;
  
  constructor(private router : Router, private route : ActivatedRoute, private _busService:BusService) {
    this.availableBuses=[];
   }

  ngOnInit(): void {
    this.availableBuses=this._busService.getBuses();
    this.columns=this._busService.getColumns();
  }

  openSeatModal(){
    this.router.navigate(['/.selectSeat']);
  }
}
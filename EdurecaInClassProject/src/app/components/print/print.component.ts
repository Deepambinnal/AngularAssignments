import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import { User } from '../../models/user.model';
import { Bus } from '../../models/bus.model';
@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  ticket = {route: {leavingFrom: '', goingTo: '', date: ''},
    bus : {busNumber: 0, coachType: '', from: '', to: '', time: '', seats: 0, fare: 0},
    seats : [],
    fare : 0
  }
  user = {userName:'', userMobile:'', userEmail:''}
  ticketId='';

  constructor(private _busService: BusService) { }

  ngOnInit(): void {
    this.ticket=this._busService.getJourney();
    this.user=this._busService.getUser();
    this.ticketId=this.ticket.bus.busNumber+this.user.userEmail;
  }

}
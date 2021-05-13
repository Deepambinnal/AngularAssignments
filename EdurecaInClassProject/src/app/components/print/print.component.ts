import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service'

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {

  ticket;
  user;
  ticketId='';

  constructor(private _busService: BusService) { }

  ngOnInit(): void {
    this.ticket=this._busService.getJourney();
    this.user=this._busService.getUser();
    this.ticketId=this.ticket.bus.busNumber+this.user.user_email;
  }

}
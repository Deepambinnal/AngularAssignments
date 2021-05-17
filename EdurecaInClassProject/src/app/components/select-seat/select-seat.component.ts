import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import type { Seat } from '../../models/seat.model';
import {Router, ActivatedRoute} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {

  showSeatList:Seat[] = [];
  total:number = 0;
  private busId:number = 0;
  private fare:number = 0;
  alert:boolean = false;
  private fillupSeat:any[] = [];
  seatsColumn1: string[] = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1', 'I1'];
  seatsColumn2: string[] = ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2', 'I2'];
  seatsColumn3: string[] = ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3', 'I3'];
  seatsColumn4: string[] = ['A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4', 'I4'];

  constructor(private _busService:BusService,private router : Router, private route : ActivatedRoute, private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => this.busId = parseInt(params.id))
  }

  seat(s){
     let seats;
     this.fare = this._busService.getFare(this.busId);
     seats = this.showSeatList.map(item=> item.seatNo)
    
    if((this.fillupSeat.indexOf(String(s))<0) && (seats.indexOf(s)<0)){
      if((this.showSeatList.length != 4)) {
        let selectedSeat = {
          seatNo:s,
          seatClass:"economy",
          fare:this.fare
        }
        this.totalFare(selectedSeat.fare);
        this.showList(selectedSeat);
        this._busService.setTotal(this.total);
      }
      else{
        this.alert = true;
      }
    }
  }

  private totalFare(fare){
    this.total += fare;
  }

  private showList(seat){
    this.showSeatList.push(seat);
  }

  confirmJourney(){
    let seats = this.showSeatList.map(item=> item.seatNo)
    this._busService.setSeats(seats);
    this.router.navigate(['userProfile']);
  }
}

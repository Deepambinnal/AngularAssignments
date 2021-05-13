import { Component, OnInit } from '@angular/core';
import { BusService } from '../../services/bus.service';
import { Seat } from '../../models/seat.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-select-seat',
  templateUrl: './select-seat.component.html',
  styleUrls: ['./select-seat.component.css']
})
export class SelectSeatComponent implements OnInit {

  showSeatList:Seat[]=[];
  total:Number=0;
  busId:Number=0;
  fare:Number=0;
  alert:boolean=false;
  fillupSeat:any[]=[];

  constructor(private _busService:BusService,private router : Router, private route : ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.busId=parseInt(params.id);
    })
  }

  Seat(s){
     let seats;
     this.fare=this._busService.getFare(this.busId);
     seats= this.showSeatList.map(iteam=>{
     return iteam.seatNo
     })
    
    if((this.fillupSeat.indexOf(String(s))<0) && (seats.indexOf(s)<0)){
      if((this.showSeatList.length!=4)) {
        let id:any = document.getElementById(s);
        //id.innerHTML = `   <button style="width=30px;"></button>`
        let selectedSeat={
          seatNo:s,
          seatClass:"economy",
          fare:this.fare
        }
        this.totalFare(selectedSeat.fare);
        this.showList(selectedSeat);
        this._busService.setTotal(this.total);
      }
      else{
        this.alert=true;
      }
    }
  }

  totalFare(fare){
    this.total+=fare;
  }

  showList(seat){
    this.showSeatList.push(seat);
  }

  confirmJourney(){
    let seats= this.showSeatList.map(iteam=>{
      return iteam.seatNo
      })
    this._busService.setSeats(seats);
    this.router.navigate(['userProfile']);
  }
}

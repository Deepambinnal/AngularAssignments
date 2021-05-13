import { Injectable } from '@angular/core';
import * as data from '../../assets/data/busesData.json';
import { Journey_Route } from '../models/route.model';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  
  allRoutes : any;
  leaving_form:string='';
  destination: string='';
  date:string='';
  routes:any[]=[];
  columns=["busNumber", "coach_type","time", "fare", "seats"];
  selectedBus;
  totalFare:number=0;
  seats=[];
  user;
  journey;

  constructor() {
    this.allRoutes=(data as any).default;
   }

  setValues(leaving_form: string, destination: string, date){
     this.leaving_form=leaving_form;
     this.destination=destination;
     this.date=date;
   }

  getBuses(){
    this.routes = this.allRoutes.filter( rt => rt.from === this.leaving_form && rt.to === this.destination );
    return this.routes;
   }

  getColumns(){
     return this.columns;
   }

  getFare(id:Number){
     console.log(id);
     this.selectedBus=this.allRoutes.filter(rt => rt.busNumber===id)[0];
     console.log(this.selectedBus);
     return this.selectedBus.fare;
     }
    
  setTotal(total){
       this.totalFare=total;
    }

  setSeats(seats){
       this.seats=seats;
    }
    
  getJourneyRoutes(){
      let journey:Journey_Route={
         leaving_form:this.leaving_form,
         going_to:this.destination,
         date:this.date
      }
      return(journey);
   }

  getBus(){
     return this.selectedBus;
   }

  getSeats(){
     return this.seats;
   }

  setUserInfo(user:user){
     this.user=user;
   }

  setJourney(jrn){
     this.journey={
         route:jrn.route,
         bus:jrn.bus,
         seats:jrn.seats,
         fare:this.totalFare
       }
   }

  getJourney(){
     return this.journey;
   }

  getUser(){
     return this.user;
   }
}

import { Injectable } from '@angular/core';
import * as data from '../../assets/data/busesData.json';
import { JourneyRoute } from '../models/route.model';
import { User } from '../models/user.model';
import { Bus } from '../models/bus.model';

@Injectable({
  providedIn: 'root'
})
export class BusService {
  
  allRoutes: Bus[];
  leavingFrom: string = '';
  destination: string = '';
  date: string = '';
  routes: any[] = [];
  columns = ["busNumber", "coachType","time", "fare", "seats"];
  selectedBus: Bus = {
   busNumber: 0,
   coachType: '',
   from: '',
   to: '',
   time: '',
   fare: 0,
   seats: 0
  };
  totalFare: number = 0;
  seats = [];
  user: User = {userName: '', userMobile: '', userEmail: ''};
  journey = {route: {leavingFrom: '', goingTo: '', date: ''},
  bus: {busNumber: 0, coachType: '', from: '', to: '', time: '', seats: 0, fare: 0},
  seats: [],
  fare: 0
  };

  constructor() {
    this.allRoutes = (data as any).default;
   }

  setValues(leavingFrom: string, destination: string, date){
     this.leavingFrom = leavingFrom;
     this.destination = destination;
     this.date = date;
   }

  getBuses(){
    this.routes = this.allRoutes.filter( rt => rt.from === this.leavingFrom && rt.to === this.destination );
    return this.routes;
   }

  getColumns(){
     return this.columns;
   }

  getFare(id: Number){
     this.selectedBus = this.allRoutes.filter(rt => rt.busNumber === id)[0];
     return this.selectedBus.fare;
     }
    
  setTotal(total){
       this.totalFare = total;
    }

  setSeats(seats){
       this.seats = seats;
    }
    
  getJourneyRoutes(){
      let journey: JourneyRoute = {
         leavingFrom: this.leavingFrom,
         goingTo: this.destination,
         date: this.date
      }
      return(journey);
   }

  getBus(){
     return this.selectedBus;
   }

  getSeats(){
     return this.seats;
   }

  setUserInfo(user: User){
     this.user = user;
   }

  setJourney(jrn){
     this.journey = {
         route: jrn.route,
         bus: jrn.bus,
         seats: jrn.seats,
         fare: this.totalFare
       }
   }

  getJourney(){
     return this.journey;
   }

  getUser(){
     return this.user;
   }
}

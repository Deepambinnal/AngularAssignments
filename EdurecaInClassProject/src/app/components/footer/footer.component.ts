import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  roads: string[];
  why_buy: string[]; 
  img: string = '';

  constructor() {
    this.roads = [
      "Bangalore to Hubli",
      "Mumbai to Pune",
      "Chennai to Hubli",
      "Chennai to Bangalore",
      "Pune to Bangalore",
      "Mumbai to Bangalore"
    ]

    this.why_buy = [
      "Buy bus tickets anytime from anywhere",
      "Pay by credit card, mobile banking, Gpay or cash",
      "Dependable customer service (8 AM to 11 PM)"
    ]

    this.img = "../assets/img/Payment_Options.jpg";
   }

  ngOnInit(): void {
  }

}

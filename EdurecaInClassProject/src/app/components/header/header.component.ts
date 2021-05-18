import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  img: string = '';

  constructor() { 
    this.img = "../assets/img/MytripLogo.png";
  }

  ngOnInit(): void {
  }

}

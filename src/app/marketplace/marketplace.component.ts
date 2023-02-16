import { Component, OnInit, Input } from '@angular/core';
import {faUser, faBox, faSpa, faHotel} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  @Input() user: any;
  public faUser = faUser;
  public faBox = faBox;
  public faSpa = faSpa;
  public faHotel = faHotel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.user)
  }

}

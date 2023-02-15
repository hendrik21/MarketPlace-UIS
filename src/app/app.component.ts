import { Component } from '@angular/core';
import {faUser, faBox, faSpa, faHotel} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public faUser = faUser;
  public faBox = faBox;
  public faSpa = faSpa;
  public faHotel = faHotel;
}

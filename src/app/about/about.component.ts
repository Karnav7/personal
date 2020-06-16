import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { SidenavServiceService } from '../services/sidenav-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  animations: [
    trigger('fadeIn', [
      state('in', style({opacity: 1})),

      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor(
    private sidenavService: SidenavServiceService
  ) { }

  ngOnInit(): void {
  }

  openSideNav() {
    
    this.sidenavService.open();
    
    // this.hideMenuBtnService.hideBtn();
  }

}

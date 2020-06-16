import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { SidenavServiceService } from '../services/sidenav-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
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
export class ContactComponent implements OnInit {

  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faEnvelope = faEnvelope;

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

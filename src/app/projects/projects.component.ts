import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { SidenavServiceService } from '../services/sidenav-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
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
export class ProjectsComponent implements OnInit {

  faGithub = faGithub;

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

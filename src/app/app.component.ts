import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // trigger('slideRightNavTxtHeader', [
    //   state('initial', style({width: '0px', display: 'none'})),
    //   state('final', style({width: '25px'})),
    //   transition('void => final', animate('500ms ease-in')),
    //   transition(':enter', [
    //     style({width: '0px'}),
    //     animate(500)
    //   ]),
    //   transition('initial=>final', [
    //     // style({width: '0px'}),
    //     animate(500)
    //   ]),
    //   // transition('final=>initial', [
    //   //   animate(500)
    //   // ])
    // ]),
    trigger('fadeIn', [
      state('in', style({opacity: 0})),

      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ])
    ])
  ]
})
export class AppComponent {
  title = 'Frontend';
  faLinkedin = faLinkedin;
  faGithub = faGithub;

  // homeState: string = 'initial';
  // experienceState: string = 'initial';
  // contactState: string = 'initial';
  // aboutState: string = 'initial';
  // projectsState: string = 'initial';

  ngOnInit(): void {
    // this.homeState = 'final';
    // console.log(this.homeState);
  }

  // animateSlideRightNavTxtHeaderHome() {
   
  //   if ( this.homeState === 'initial') {
  //     this.homeState = 'final';
  //     this.aboutState = 'initial';
  //     this.contactState = 'initial';
  //     this.experienceState = 'initial';
  //     this.projectsState = 'initial';
  //   }
   
  // }

  // animateSlideRightNavTxtHeaderAbout() {
  //   if ( this.aboutState === 'initial') {
  //     this.homeState = 'initial';
  //     this.aboutState = 'final';
  //     this.contactState = 'initial';
  //     this.experienceState = 'initial';
  //     this.projectsState = 'initial';
  //   }
  // }

  // animateSlideRightNavTxtHeaderContact() {
  //   if ( this.contactState === 'initial' ) {
  //     this.homeState = 'initial';
  //     this.aboutState = 'initial';
  //     this.contactState = 'final';
  //     this.experienceState = 'initial';
  //     this.projectsState = 'initial';
  //   }
  // }

  // animateSlideRightNavTxtHeaderExperience() {
  //   if ( this.experienceState === 'initial' ) {
  //     this.homeState = 'initial';
  //     this.aboutState = 'initial';
  //     this.contactState = 'initial';
  //     this.experienceState = 'final';
  //     this.projectsState = 'initial';
  //   }
  // }

  // animateSlideRightNavTxtHeaderProject() {
  //   if ( this.projectsState === 'initial' ) {
  //     this.homeState = 'initial';
  //     this.aboutState = 'initial';
  //     this.contactState = 'initial';
  //     this.experienceState = 'initial';
  //     this.projectsState = 'final';
  //   }
  // }
} 

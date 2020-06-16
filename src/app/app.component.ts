import { Component, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements AfterViewInit {
  title = 'Frontend';
  
  // homeState: string = 'initial';
  // experienceState: string = 'initial';
  // contactState: string = 'initial';
  // aboutState: string = 'initial';
  // projectsState: string = 'initial';

  constructor() {}

  ngAfterViewInit() {
    // this.homeState = 'final';
    // console.log(this.homeState);

    // this.opened = this.homeOpen;
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

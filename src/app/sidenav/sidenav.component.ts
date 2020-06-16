import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { HomeComponent } from '../home/home.component';
import { MatDrawer } from '@angular/material/sidenav';

import { SidenavServiceService } from '../services/sidenav-service.service';
import { HideMenuBtnService } from '../services/hide-menu-btn.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  faLinkedin = faLinkedin;
  faGithub = faGithub;

  opened = false;

  // @ViewChildren(HomeComponent) homeOpen: boolean;
  @ViewChild('navbar') sidenav: MatDrawer; 

  constructor(
    private sidenavService: SidenavServiceService,
    private elemRef: ElementRef,
    private hideMenuBtnService: HideMenuBtnService
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }

  setOpened(val: boolean) {
    // this.opened = val;
    // this.drawerMobile.open();
    
    // this.drawerMobile.toggle();
    // console.log(this.opened);
  }

  closeSideNav() {
    this.sidenav.close();
    // let hc: HomeComponent = new HomeComponent(this.sidenavService, this.elemRef);
    // setTimeout(() => {
    //   hc.hideMenu(false);
    // }, 1000)
    this.hideMenuBtnService.showBtn();
    // hc.menuBtn.style.display = 'none';
  }

}

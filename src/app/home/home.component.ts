import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { SidenavComponent } from '../sidenav/sidenav.component';

import { SidenavServiceService } from '../services/sidenav-service.service';
import { HideMenuBtnService } from '../services/hide-menu-btn.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  hideMenuBtn: boolean = false;

  @ViewChild('menubtn') public menuBtn: ElementRef;

  constructor(
    private sidenavService: SidenavServiceService,
    private hideMenuBtnService: HideMenuBtnService,
    private elemRef: ElementRef
    ) { }

  // @Input('opened') opened: boolean;
  // @Output() openedOutput = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.elemRef = this.menuBtn;
    this.hideMenuBtnService.setValue(this.hideMenuBtn);
  }

  openSideNav() {
    
    this.sidenavService.open();
    
    // this.hideMenuBtnService.hideBtn();
  }

  // hideMenu(value: boolean) {
  //   this.hideMenuBtn = value;
  // }

}

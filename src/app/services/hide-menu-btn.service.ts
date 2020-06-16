import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HideMenuBtnService {

  private val: boolean;

  constructor() { }

  public setValue(val: boolean) {
    this.val = val;
  }

  public hideBtn() {
    this.val = true;
  }

  public showBtn() {
    this.val = false;
  }
}

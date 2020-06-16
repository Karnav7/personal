import { TestBed } from '@angular/core/testing';

import { HideMenuBtnService } from './hide-menu-btn.service';

describe('HideMenuBtnService', () => {
  let service: HideMenuBtnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HideMenuBtnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

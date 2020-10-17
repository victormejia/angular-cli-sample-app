import { TestBed } from '@angular/core/testing';

import { MycomponentsService } from './mycomponents.service';

describe('MycomponentsService', () => {
  let service: MycomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OrganisationdataService } from './organisationdata.service';

describe('OrganisationdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganisationdataService = TestBed.get(OrganisationdataService);
    expect(service).toBeTruthy();
  });
});

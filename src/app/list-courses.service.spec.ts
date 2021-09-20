import { TestBed } from '@angular/core/testing';

import { ListCoursesService } from './list-courses.service';

describe('ListCoursesService', () => {
  let service: ListCoursesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListCoursesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextRetrieveAndProcessService } from './text-retrieve-and-process.service';

describe('TextService', () => {
  let service: TextRetrieveAndProcessService;

  const input = 'bla bla bla';
  const expectedOutput = {'bla':3};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(TextRetrieveAndProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should count words", () => {
    expect(service.process(input)).toEqual(expectedOutput);
  });


});

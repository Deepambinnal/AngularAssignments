import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let injector: TestBed;
  let service: ApiServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[ApiServiceService]
    });
    service = TestBed.inject(ApiServiceService);
    injector = getTestBed();
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getData', () => {
    it(' should return an Observable<User[]>', () => {
      const testData = [
        {
          "id": 40,
          "employee_name": "Jenette Caldwell",
          "employee_salary": 345000,
          "employee_age": 30,
          "profile_image": ""
        },
        {
          "id": 22,
          "employee_name": "Yuri Berry",
          "employee_salary": 675000,
          "employee_age": 40,
          "profile_image": ""
        }
      ];
  

      httpClient.get('http://dummy.restapiexample.com/api/v1/employeesx1')
      .subscribe(data =>
      expect(data[0].id).toEqual(testData[0].id)
    );

    const req = httpTestingController.expectOne('http://dummy.restapiexample.com/api/v1/employeesx1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
    });
  });
});

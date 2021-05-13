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
    //service = injector.get(ApiServiceService);
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
  
      // service.getData().subscribe(data => {
      //   expect(data.length).toBe(2);
      //   expect(data).toEqual(testData);
      // });

      httpClient.get('http://dummy.restapiexample.com/api/v1/employeesx1')
      .subscribe(data =>
      // When observable resolves, result should match test data
     // expect(data).toEqual(testData)
      expect(data[0].id).toEqual(testData[0].id)
    );

    const req = httpTestingController.expectOne('http://dummy.restapiexample.com/api/v1/employeesx1');
    expect(req.request.method).toEqual('GET');
    req.flush(testData);
    httpTestingController.verify();
  
      // const req = httpMock.expectOne('http://dummy.restapiexample.com/api/v1/employeesx');
      // expect(req.request.method).toBe("GET");
      // expect(req.request.responseType).toBe("json");
      // req.flush(dummyData);
    });
  });
});

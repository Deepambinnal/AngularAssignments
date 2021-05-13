import { TestBed } from '@angular/core/testing';
import { UploadfileService } from './upload-file.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('UploadFileService', () => {
  let service: UploadfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[UploadfileService]
    });
    service = TestBed.inject(UploadfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

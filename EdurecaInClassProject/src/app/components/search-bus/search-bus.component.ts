import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpEventType, HttpResponse, HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';

import { BusService } from '../../services/bus.service';
import { UserService } from '../../services/user.service';
import { UploadfileService } from '../../services/upload-file.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-search-bus',
  templateUrl: './search-bus.component.html',
  styleUrls: ['./search-bus.component.css']
})
export class SearchBusComponent implements OnInit {

  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  places: string[];
  errorMessage = '';

  fileInfos?: Observable<any>;
  admin: boolean = false;
  constructor(
    private router:Router, 
    private _busService:BusService, 
    private _userService:UserService,
    private _uploadFileService:UploadfileService,
    private http:HttpClient,
    private translate: TranslateService
    ) { 
      this.places =[
        "Pune", "Bangalore", "Chennai", "Hubli"
      ];
      translate.setDefaultLang('en');
    }

    selectFile(event: any): void {
      this.selectedFiles = event.target.files;
    }
  
    upload(): void {
      this.progress = 0;
    
      if (this.selectedFiles) {
        const file: File | null = this.selectedFiles.item(0);
    
        if (file) {
          this.currentFile = file;
          this._uploadFileService.upload(this.currentFile).subscribe(
            (event: any) => {
              if (event.type === HttpEventType.UploadProgress) {
                this.progress = Math.round(100 * event.loaded / event.total);
              } else if (event instanceof HttpResponse) {
                this.message = event.body.message;
              }
            },
            (err: any) => {
              this.progress = 0;
              if (err.error && err.error.message) {
                this.message = err.error.message;
              } else {
                this.message = 'Could not upload the file!';
              }
              this.currentFile = undefined;
            });
        }
        this.selectedFiles = undefined;
      }
    }

    download(): any {
      this._uploadFileService.download()
      .subscribe(response => {
        let blob:any = new Blob([response], { type: 'text/json; charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        fileSaver.saveAs(blob, 'covid-19_guidelines.docx');
      });
    }

  ngOnInit(): void {
    if(this._userService.getUser() === 'admin'){
      this.admin = true;
    }
  }

  SearchBus(form: NgForm){
    let source = form.value.source;
    let destination = form.value.destination;
    let date = form.value.departDate;

    this._busService.setValues(source, destination, date);
    if(source === destination){
      this.errorMessage = this.translate.instant('searchBus.sourceDestError');
    }
    else if (this._busService.getBuses().length == 0){
      this.errorMessage = this.translate.instant('searchBus.noRoutes');
    }
    else{
      this.router.navigate(['busSearch']);
    }
  }
}


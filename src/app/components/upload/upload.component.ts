import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  providers: [MessageService]
})
export class UploadComponent implements OnInit {

  uploadedFiles: any[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit() { }

  onUpload(event) {

      for(let file of event.files) {
            this.uploadedFiles.push(file);
        }

      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }

}

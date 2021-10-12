import { Component, OnInit } from '@angular/core';
import { DriveFile } from '../models/driveFile';
import { GoogleDriveService } from 'src/app/models/googleDriveService';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentComponent } from './add-comment/add-comment.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public files: DriveFile[] = [];

  public selectedFiles: DriveFile[] = [];

  constructor(public dialog: MatDialog, private service: GoogleDriveService) { }

  ngOnInit(): void {
    this.service.getFiles().subscribe(x => {
      this.files = x;
    });
  }

  public addComment() {
    this.selectedFiles.reverse().forEach(f => {
      const dialogRef = this.dialog.open(AddCommentComponent, {
        width: '500px',
        data: { filename: f.fileName }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('POST  /files/fileId/comments fields:', result);
      });
    })

  }

  public delete() {
    this.selectedFiles.reverse().forEach(f => {
      console.log('Delete', f.fileName);
    });
  }
}

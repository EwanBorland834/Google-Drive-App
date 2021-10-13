import { Component, OnInit } from '@angular/core';
import { DriveFile } from '../models/driveFile';
import { GoogleDriveService } from 'src/app/models/googleDriveService';
import { MatDialog } from '@angular/material/dialog';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommentData } from '../models/comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public files: DriveFile[] = [];

  public selectedFiles: DriveFile[] = [];

  public mostRecentlySelectedFile: any = null;

  public commentsOnSelectedFile: CommentData[] = [];

  constructor(public dialog: MatDialog, private service: GoogleDriveService,
    private snackBar: MatSnackBar,) { }

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
        this.openSnackBar('Comment added to ' + f.fileName, 'OK');
        this.getComments();
      });
    })

  }

  public delete() {
    this.selectedFiles.forEach(f => {
      console.log('Delete', f.fileName);
      this.files.splice(this.files.indexOf(f), 1);
      this.service.deleteFile(f).subscribe(() =>
        this.openSnackBar(f.fileName + ' deleted', 'OK'));
    });
    this.selectedFiles = [];
    this.getComments();
  }

  public getComments() {
    if (this.selectedFiles.length > 0) {
      this.service.getComments(this.mostRecentlySelectedFile.fileName).subscribe(
        comments => {this.commentsOnSelectedFile = comments;}
      );
    } else {
      this.commentsOnSelectedFile = [];
    }
  }

  public lastSelectedFileName(): string {
    if (this.selectedFiles.length > 0) {
      return this.mostRecentlySelectedFile.fileName;
    } else {
      return '';
    }
  }

  public setLastSelected(file: DriveFile): void {
    if (this.selectedFiles.includes(file)) {
      this.mostRecentlySelectedFile = file;
    } else {
      this.mostRecentlySelectedFile = this.selectedFiles[0];
    }
    console.log('Last selected: ', this.mostRecentlySelectedFile);
  }

  private openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {duration: 1500});
  }
}

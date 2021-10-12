import { Component, Injectable, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { CommentData } from 'src/app/models/comment';
import { GoogleDriveService } from 'src/app/models/googleDriveService';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCommentComponent>,
    private service: GoogleDriveService,
    @Inject(MAT_DIALOG_DATA) public data: CommentData) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onSave() {
    console.log('save', this.data.filename);
    this.service.addComment(this.data).subscribe(x => console.log(x));
  }

  onNoClick() {
    this.dialogRef.close();
  }
}

import { Component, OnInit } from '@angular/core';
import { MatListOption } from '@angular/material/list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public files = ['file1', 'file2', 'file3'];
  public selectedFiles: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  public addComment() {
    console.log('Comment on', this.selectedFiles);
  }

  public delete() {
    console.log('Delete', this.selectedFiles);
  }

}

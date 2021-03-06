import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddCommentComponent } from './home/add-comment/add-comment.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { CommentViewComponent } from './home/comment-view/comment-view.component';
import { RouteGuard } from './models/routeGuard';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddCommentComponent,
    CommentViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

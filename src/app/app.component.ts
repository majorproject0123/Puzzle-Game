import { Component, NgModule } from '@angular/core';
//import { NgModule } from'@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { PuzzleComponent } from './puzzle.component';
// import { IndexComponent } from './index.component';
import { from } from 'rxjs';
import { IndexComponent } from './Puzzle/index.component';
import { PuzzleComponent } from './Puzzle/puzzle.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule ({
  declarations: [
    IndexComponent ,
    PuzzleComponent
  ],
  exports: [
    PuzzleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: []
 
})  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularfirebase-authentication';
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameBoardComponent } from './components/game-board/game-board.component';
import { GameBoardFieldComponent } from './components/game-board-field/game-board-field.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameBoardFieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

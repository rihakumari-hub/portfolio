import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AskAiDialogComponent } from '../../ask-ai-dialog-component/ask-ai-dialog-component';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  constructor(private dialog: MatDialog) {}

  openAI() {
    this.dialog.open(AskAiDialogComponent, {
      width: '1100px',
      maxWidth: '95vw',
      height: '650px',
      panelClass: 'ai-dialog'
    });
  }
}

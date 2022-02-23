import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  theme = 'theme-one';

  constructor(){
  }

  ngOnInit() {
  }

  selectTheme(_event: any): void {
    this.theme = _event
  }
}

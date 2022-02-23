import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  selectedTheme: number = 1;
  buttons: string[] = [
    '7', '8', '9', 'DEL','4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='
  ]

  @Output() onThemeChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectTheme(_event: any):void {
    let selected = _event.target.value;
    if(selected == '1'){
      this.onThemeChange.emit('theme-one');
    } else if(selected == '2') {
      this.onThemeChange.emit('theme-two');
    } else if(selected == '3') {
      this.onThemeChange.emit('theme-three');
    }
  }

}

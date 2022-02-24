import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keypad } from 'src/keypad';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  selectedTheme: number = 1;
  buttons: string[] = [
    '7', '8', '9', 'DEL','4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='
  ];

  mybuttons: Keypad[] = [
    {'text': '7',
    'operation': 'number',
    'value': 7},
    {'text': '8',
    'operation': 'number',
    'value': 8},
    {'text': '9',
    'operation': 'number',
    'value': 9},
    {'text': 'DEL',
    'operation': 'delete'},
    {'text': '4',
    'operation': 'number',
    'value': 4},
    {'text': '5',
    'operation': 'number',
    'value': 5},
    {'text': '6',
    'operation': 'number',
    'value': 6},
    {'text': '+',
    'operation': 'add'},
    {'text': '1',
    'operation': 'number',
    'value': 1},
    {'text': '2',
    'operation': 'number',
    'value': 2},
    {'text': '3',
    'operation': 'number',
    'value': 3},
    {'text': '-',
    'operation': 'sub'},
    {'text': '.',
    'operation': 'decimal'},
    {'text': '0',
    'operation': 'number',
    'value': 0},
    {'text': '/',
    'operation': 'divide'},
    {'text': 'x',
    'operation': 'multiply'},
    {'text': 'Reset',
    'operation': 'reset'},
    {'text': '=',
    'operation': 'equals'}
  ]

  @Output() onThemeChange: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectTheme(_event: any):void {
    let selected = _event.target.value;
    if(selected == '1'){
      this.onThemeChange.emit('theme-one');
      this.selectedTheme = 1;
    } else if(selected == '2') {
      this.onThemeChange.emit('theme-two');
      this.selectedTheme = 2;
    } else if(selected == '3') {
      this.onThemeChange.emit('theme-three');
      this.selectedTheme = 3;
    }
  }

}

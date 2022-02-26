import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Keypad } from 'src/keypad';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  selectedTheme: number = 1;
  leftside: string = '';
  rightside: number = 0;
  total: string = '';
  calcStack: string[] = [];
  errorDisplay: string = '';

  mybuttons: Keypad[] = [
    { text: '7', operation: 'number', value: 7 },
    { text: '8', operation: 'number', value: 8 },
    { text: '9', operation: 'number', value: 9 },
    { text: 'DEL', operation: 'delete', value: 10 },
    { text: '4', operation: 'number', value: 4 },
    { text: '5', operation: 'number', value: 5 },
    { text: '6', operation: 'number', value: 6 },
    { text: '+', operation: 'add', value: 11 },
    { text: '1', operation: 'number', value: 1 },
    { text: '2', operation: 'number', value: 2 },
    { text: '3', operation: 'number', value: 3 },
    { text: '-', operation: 'sub', value: 11 },
    { text: '.', operation: 'decimal', value: -1 },
    { text: '0', operation: 'number', value: 0 },
    { text: '/', operation: 'divide', value: 11 },
    { text: 'x', operation: 'multiply', value: 11 },
    { text: 'Reset', operation: 'reset', value: 13 },
    { text: '=', operation: 'equals', value: 14 },
  ];

  @Output() onThemeChange: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  selectTheme(_event: any): void {
    let selected = _event.target.value;
    if (selected == '1') {
      this.onThemeChange.emit('theme-one');
      this.selectedTheme = 1;
    } else if (selected == '2') {
      this.onThemeChange.emit('theme-two');
      this.selectedTheme = 2;
    } else if (selected == '3') {
      this.onThemeChange.emit('theme-three');
      this.selectedTheme = 3;
    }
  }

  updateScreen(): void {
    if (this.calcStack.length == 0) this.total = '';
    if (this.calcStack.length == 1 || this.calcStack.length == 2)
      this.total = this.calcStack[0];
    if (this.calcStack.length == 3) this.total = this.calcStack[2];
  }

  calculate(): void {
    /**TODO: calculate */
    let secondOperand = parseFloat(this.calcStack.pop()!);
    let operation = this.calcStack.pop();
    let firstOperand = parseFloat(this.calcStack.pop()!);
    let result = 0;

    switch (operation) {
      case 'add':
        result = firstOperand + secondOperand;
        break;
      case 'sub':
        result = firstOperand - secondOperand;
        break;
      case 'multiply':
        result = firstOperand * secondOperand;
        break;
      case 'divide':
        if (secondOperand == 0) this.errorDisplay = "Can't divide by zero";
        else result = firstOperand / secondOperand;
        break;
    }
    if (this.errorDisplay == '') this.calcStack.push(result.toString());
    console.log('calculated : ' + result);
  }

  clickKeypad(key: Keypad): void {
    /** key.value
     *  10 - delete
     *  11 - operation
     *  12 - decimal
     *  13 - reset
     *  14 - equals
     */
    this.errorDisplay = '';
    if (this.calcStack.length == 0 && key.value < 10) {
      this.calcStack.push(key.text);
    } else if (this.calcStack.length == 1) {
      if (key.value < 10) {
        this.calcStack[0] = this.calcStack[0].concat(key.text);
      } else if (key.value == 11) {
        this.calcStack.push(key.operation);
      } else if (key.value == 10) {
        this.calcStack[0] = this.calcStack[0].substring(
          0,
          this.calcStack[0].length - 1
        );
        if (this.calcStack[0].length == 0) this.calcStack.pop();
      }
    } else if (this.calcStack.length == 2) {
      if (key.value < 10) {
        this.calcStack.push(key.text);
      } else if (key.value == 11) {
        this.calcStack[1] = key.operation;
      } else if (key.value == 10) {
        this.calcStack[0] = this.calcStack[0].substring(
          0,
          this.calcStack[0].length - 1
        );
        if (this.calcStack[0].length == 0) {
          this.calcStack.pop();
          this.calcStack.pop();
        }
      }
    } else if (this.calcStack.length == 3) {
      if (key.value < 10) {
        this.calcStack[2] = this.calcStack[2].concat(key.text);
      } else if (key.value == 11) {
        this.calculate();
        this.calcStack.push(key.operation);
      } else if (key.value == 10) {
        this.calcStack[2] = this.calcStack[2].substring(
          0,
          this.calcStack[2].length - 1
        );
        if (this.calcStack[2].length == 0) this.calcStack.pop();
      }
    }

    if (key.value == 14) {
      this.calculate();
    }
    if (key.value == 13) {
      for (; this.calcStack.length > 0; ) {
        this.calcStack.pop();
      }
    }
    this.updateScreen();
  }
}

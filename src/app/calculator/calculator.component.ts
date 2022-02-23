import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  theme: number = 1;
  buttons: string[] = [
    '7', '8', '9', 'DEL','4', '5', '6', '+', '1', '2', '3', '-', '.', '0', '/', 'x', 'RESET', '='
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

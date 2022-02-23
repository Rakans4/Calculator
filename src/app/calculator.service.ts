import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  total: number = 0;
  floatNumber: boolean = false;

  constructor() { }

  add(a:number, b:number): number {
    this.floatNumber = false;
    return a+b;
  }

  subtract(a:number, b:number): number {
    this.floatNumber = false;
    return a-b;
  }

  multiply(a:number, b:number): number {
    this.floatNumber = false;
    return a*b
  }

  // handle divide by zero
  divide(a:number, b:number): number {
    this.floatNumber = false;
    return a/b;
  }

  typeFloatNumber():boolean {
    this.floatNumber = true;
    return this.floatNumber;
  }

  decimals(a:number, b:number): number {
    let floats = 1;
    for(let i = 1; i <= b.toString().length; i++){
      floats*10
    }
    b = b/floats;
    return Math.floor(a)+b;
  }
}

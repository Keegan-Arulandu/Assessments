import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  
  currentNumber = "noNumber"
  calNumber = 0;
  firstNum = 0;
  secNum = 0;
  total = 0;
  operator = "noOperator"

  constructor()  {

  }
// Separating Number buttons from operator buttons
  onButtonPress(value, type) {
    if(type == 'number') {
      this.renderNumbers(value);
    } else if (type == 'operator') {
      this.renderOperators(value)
    }
  }

  renderNumbers(value) {
    if(this.currentNumber !== "noNumber") {
      this.currentNumber = this.currentNumber + value;
    } else {
      this.currentNumber = value;
    }
    this.calNumber = parseFloat(this.currentNumber);
  }

  renderOperators(value) {
    if(this.operator == 'noOperator') {
      this.firstNum = this.calNumber;
      this.calNumber = 0;
      this.currentNumber = 'noNumber'
      this.operator = value;
    } else if(this.operator !== 'noOperator') {
      // this.secNum = this.calNumber;
    }
  }

  calculationLogic () {
    this.secNum = this.calNumber;
    if(this.operator == '+') {
      this.calNumber = this.firstNum + this.secNum;
    } else if (this.operator == '-') {
      this.calNumber = this.firstNum - this.secNum;
    } else if (this.operator == '*') {
      this.calNumber = this.firstNum * this.secNum;
    } else if (this.operator == '/') {
      this.calNumber = this.firstNum / this.secNum;
    }
    this.onEqualsPress();
    console.log(this.currentNumber = String(this.total))
  }

  onEqualsPress() {
    this.currentNumber = "noNumber"
    this.firstNum = this.calNumber;
    this.secNum = 0;
    this.operator = "noOperator";
  }

  renderReset() {
    this.firstNum = 0;
    this.secNum = 0;
    this.calNumber = 0;
    this.currentNumber = "noNumber"
    this.operator = "noOperator";
  }



}

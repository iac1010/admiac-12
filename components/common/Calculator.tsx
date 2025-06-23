
import React, { useState } from 'react';
import Button from './Button';

const Calculator: React.FC = () => {
  const [displayValue, setDisplayValue] = useState<string>('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState<boolean>(false);

  const handleNumberInput = (numStr: string) => {
    if (waitingForOperand) {
      setDisplayValue(numStr);
      setWaitingForOperand(false);
    } else {
      setDisplayValue(displayValue === '0' ? numStr : displayValue + numStr);
    }
  };

  const handleDecimalInput = () => {
    if (waitingForOperand) {
      setDisplayValue('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!displayValue.includes('.')) {
      setDisplayValue(displayValue + '.');
    }
  };

  const performCalculation = (
    val1: number,
    val2: number,
    op: string
  ): number | 'Error' => {
    switch (op) {
      case '+': return val1 + val2;
      case '-': return val1 - val2;
      case '*': return val1 * val2;
      case '/': return val2 === 0 ? 'Error' : val1 / val2;
      default: return val2;
    }
  };

  const handleOperatorInput = (nextOperator: string) => {
    const currentValue = parseFloat(displayValue);

    if (previousValue !== null && operator && !waitingForOperand) {
      const result = performCalculation(previousValue, currentValue, operator);
      if (result === 'Error') {
        setDisplayValue('Error');
        setPreviousValue(null);
        setOperator(null);
        setWaitingForOperand(true);
        return;
      }
      setDisplayValue(String(result));
      setPreviousValue(result);
    } else {
      setPreviousValue(currentValue);
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const handleEquals = () => {
    if (operator && previousValue !== null) {
      const currentValue = parseFloat(displayValue);
      const result = performCalculation(previousValue, currentValue, operator);

      if (result === 'Error') {
        setDisplayValue('Error');
      } else {
        setDisplayValue(String(result));
      }
      setPreviousValue(null);
      setOperator(null);
      setWaitingForOperand(true);
    }
  };

  const handleClear = () => {
    setDisplayValue('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };
  
  const handleBackspace = () => {
    if (displayValue === 'Error' || waitingForOperand) {
        // If error or waiting for new operand, backspace should behave like clear for the display
        setDisplayValue('0');
        setWaitingForOperand(false); // Allow new input immediately
        return;
    }
    if (displayValue.length > 1) {
      setDisplayValue(displayValue.slice(0, -1));
    } else {
      setDisplayValue('0');
    }
  };


  const buttonClass = "w-full h-14 text-xl font-medium rounded-lg shadow-md focus:ring-2 focus:ring-offset-1";
  const numButtonClass = `${buttonClass} bg-secondary-200 hover:bg-secondary-300 text-secondary-800 focus:ring-secondary-400`;
  const opButtonClass = `${buttonClass} bg-primary-500 hover:bg-primary-600 text-white focus:ring-primary-400`;
  const specialButtonClass = `${buttonClass} bg-secondary-500 hover:bg-secondary-600 text-white focus:ring-secondary-400`;


  return (
    <div className="w-full max-w-xs mx-auto p-4 bg-secondary-100 rounded-lg shadow-inner">
      <div 
        className="bg-secondary-800 text-white text-right text-3xl font-mono p-4 rounded-md mb-4 overflow-x-auto"
        role="textbox"
        aria-readonly="true"
        aria-label="Calculator display"
      >
        {displayValue}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <Button onClick={handleClear} className={`${specialButtonClass} col-span-2`}>AC</Button>
        <Button onClick={handleBackspace} className={specialButtonClass}>DEL</Button>
        <Button onClick={() => handleOperatorInput('/')} className={opButtonClass}>÷</Button>

        <Button onClick={() => handleNumberInput('7')} className={numButtonClass}>7</Button>
        <Button onClick={() => handleNumberInput('8')} className={numButtonClass}>8</Button>
        <Button onClick={() => handleNumberInput('9')} className={numButtonClass}>9</Button>
        <Button onClick={() => handleOperatorInput('*')} className={opButtonClass}>×</Button>

        <Button onClick={() => handleNumberInput('4')} className={numButtonClass}>4</Button>
        <Button onClick={() => handleNumberInput('5')} className={numButtonClass}>5</Button>
        <Button onClick={() => handleNumberInput('6')} className={numButtonClass}>6</Button>
        <Button onClick={() => handleOperatorInput('-')} className={opButtonClass}>−</Button>

        <Button onClick={() => handleNumberInput('1')} className={numButtonClass}>1</Button>
        <Button onClick={() => handleNumberInput('2')} className={numButtonClass}>2</Button>
        <Button onClick={() => handleNumberInput('3')} className={numButtonClass}>3</Button>
        <Button onClick={() => handleOperatorInput('+')} className={opButtonClass}>+</Button>

        <Button onClick={() => handleNumberInput('0')} className={`${numButtonClass} col-span-2`}>0</Button>
        <Button onClick={handleDecimalInput} className={numButtonClass}>.</Button>
        <Button onClick={handleEquals} className={opButtonClass}>=</Button>
      </div>
    </div>
  );
};

export default Calculator;

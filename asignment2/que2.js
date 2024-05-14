//2.  Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

function calculate(operation, num1, num2) {
    let result;
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Division by zero is not allowed';
        }
        break;
      default:
        result = 'Invalid operation';
    }

    return result;
  }
  console.log(calculate('add', 5, 37));        
  console.log(calculate('subtract', 50, 4));   
  console.log(calculate('multiply', 6, 8));    
  console.log(calculate('divide', 16, 2));   
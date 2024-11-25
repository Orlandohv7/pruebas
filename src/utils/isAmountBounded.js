export function isAmountBounded(num) {
    const min = 1;
    const max = 1000;
  
    if (num >= min && num <= max) {
      return true;
    } else {
      return false;
    }
  }
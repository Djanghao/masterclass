# JavaScript (Simple)

**Author:** swseverance
**Votes:** 2
**Link:** [https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612058/](https://leetcode.com/problems/finding-3-digit-even-numbers/solutions/1612058/)

---

```
var findEvenNumbers = function(digits) {
  const result = [];
  
  const counts = new Array(10).fill(0);
  
  // count how many instances of each digit we have
  for (const digit of digits) {
    counts[digit]++;
  }
  
  // we are only concerned with 3 digit even numbers that don't have leading zeroes
  // so we can start at 100 and increment by 2 until we reach 1000
  for (let num = 100; num < 1000; num += 2) {
    let number = num;
    const onesDigit = number % 10;
    number = Math.floor(number / 10);
    const tensDigit = number % 10;
    number = Math.floor(number / 10);
    const hundredsDigit = number;
    
    // each time we use a digit we update our counts
    counts[onesDigit]--;
    counts[tensDigit]--;
    counts[hundredsDigit]--;
    
    // check if we have enough of each digit to construct the number
    if (counts[onesDigit] >= 0 && counts[tensDigit] >= 0 && counts[hundredsDigit] >= 0)
      result.push(num);
    
    // restore the original counts
    counts[onesDigit]++;
    counts[tensDigit]++;
    counts[hundredsDigit]++;
  }
  
  return result;
};
```
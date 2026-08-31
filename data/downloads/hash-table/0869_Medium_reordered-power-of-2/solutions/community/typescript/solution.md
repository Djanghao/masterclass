# TypeScript | JavaScript | Easy understand | 100% fast

**Author:** JstKing
**Votes:** 1
**Link:** [https://leetcode.com/problems/reordered-power-of-2/solutions/2482923/](https://leetcode.com/problems/reordered-power-of-2/solutions/2482923/)

---

Hi there! I am new to evaluating the complexity of algorithms, if there is an error, please correct it.

**Solution 1 (with pow)**
TC O(log(n) * log(n) * log(log(n)))
SC O(1)

```javascript
function reorderedPowerOf2(n: number): boolean {
  const guaranteedMoreNumber = 10 ** n.toString().length; // find a guaranteed higher number
  let lastPower = 0; // the power of 2
  n = +n.toString().split('').sort((a, b) => +b - +a).join('') // sorting the incoming `n` in DESC

  while (guaranteedMoreNumber > (2 ** lastPower)) {
    if (+(2 ** lastPower).toString().split('').sort((a, b) => +b - +a).join('') === n) { // sorting the current power of 2 in DESC and comparing with the resulting `n`
      return true; 
    }
    lastPower++;
  }
  
  return false;
};
```

**Solution 2 (bitwise shift)**
TC O(log(n) * log(log(n))
SC O(1)

```javascript
function reorderedPowerOf2(n: number): boolean {
  if (n === 10 ** 9) { // checking the extreme value (type `Number` in js is Float64, but it`s casted to Int32 internally during bitwise operations *
    return false;
  }
  
  const strN = n.toString();
  const guaranteedMoreNumber = 10 ** strN.length; // find a guaranteed higher number
  const guaranteedLessNumber = 10 ** (strN.length - 1); // find a guaranteed less number
  let lastPower = 1; // the result of the power of two
  n = +strN.split('').sort((a, b) => +b - +a).join('');

  while (guaranteedLessNumber > lastPower) { // looking for the minimum number of the power of two
    lastPower <<= 1;
  }

  while (guaranteedMoreNumber > lastPower) {
    if (+lastPower.toString().split('').sort((a, b) => +b - +a).join('') === n) { // sorting the current power of 2 in DESC and comparing with the resulting `n`
      return true; 
    }
    lastPower <<= 1;
  }
  
  return false;
};
```

Links:
[Integers in js](http://speakingjs.com/es5/ch11.html#integers)
[js Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
[js bitwise-operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#bitwise_operators)
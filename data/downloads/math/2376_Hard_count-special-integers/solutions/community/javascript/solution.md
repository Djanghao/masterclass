# Clear and easy understanding solution.

**Author:** Gang-Li
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/3194688/](https://leetcode.com/problems/count-special-integers/solutions/3194688/)

---

# Intuition
   Solution:
   Step 1: get the digits of num: 735 => [7, 3, 5];
           const LEN = digits.length;
   Step 2: count [Special Number] of length 1, of length 2, until LEN - 1;
           function getDistinctCount is created for that
   Step 3: count [Special Number] of length LEN, with prefix from digits
           To do that, iterate each digit, and count [Special Number] with prefix
          
          e.g, when iteration to 7, the prefix is empty
          The first digit of [Special number of length LEN] can be one of [1, 2, 3, 4, 5, 6]
          The remaing digits can be from [0, 9] AS LONG AS not taken already.

          when iteration to 3, the prefix is 7, we need count 7??
          The second digit can be one of [0, 1, 2, 3, 4]
          The remaing digits can be from [0, 9] AS LONG AS not taken already (7 and 5).
           
          when iteration to 5, the prefix is 73, we need count 73?
          The last digit can be one of [0, 1, 2, 4, 5]
          
          Edge case: when iterate the digits array, if current number has been taken before, then break
                     the while loop because it does not be a [Special Number]

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * We call a positive integer special if all of its digits are distinct.
 * Given a positive integer n, return the number of special integers that belong to the interval [1, n].
 
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function (n) {
  function getDigits(num) {
    let ans = [];
    while (num > 9) {
      let dt = num % 10;
      ans.unshift(dt);
      num -= dt;
      num /= 10;
    }

    if (num !== 0) ans.unshift(num);

    return ans;
  }

  // len: digits amount. 3 menas: xyz number
  function getDistinctCount(len) {
    if (len < 1 || len > 10) throw new Error(`Invalid len: ${len}`);
    else if (len === 1) return 9;

    let sum = 9; // the top digit range can ONLY be [1, 9]
    let digitsRemain = 9;
    len--;
    while (len-- > 0) {
      sum *= digitsRemain;
      digitsRemain--;
    }

    return sum;
  }

  function getDistinctCountPlus(
    remainLen,
    currentDigit,
    takenDigits,
    isFirst = false
  ) {
    let currentDigitChoices = 0;
    let isLastDigit = remainLen === 0;
    for (
      let j = isFirst ? 1 : 0;
      j <= (isLastDigit ? currentDigit : currentDigit - 1);
      j++
    ) {
      if (takenDigits.has(j)) continue;
      currentDigitChoices++;
    }

    let remainDigitsCombination = 1;
    let remainDigits = 10 - takenDigits.size - 1;
    while (remainLen > 0) {
      remainDigitsCombination *= remainDigits;
      remainDigits--;
      remainLen--;
    }

    return currentDigitChoices * remainDigitsCombination;
  }

  if (n < 10) return n;
  let digits = getDigits(n);
  const LEN = digits.length;
  let ans = 0;
  // first, count [Sepcial Number] of length 1, 2, to LEN - 1
  for (let i = 1; i < LEN; i++) ans += getDistinctCount(i);

  // now, we need count [Sepcial Number] of length LEN
  let takenDigits = new Set();
  for (let i = 0; i < LEN; i++) {
    let digit = digits[i];
    ans += getDistinctCountPlus(LEN - 1 - i, digit, takenDigits, i === 0);

    if (takenDigits.has(digit)) break;
    else takenDigits.add(digit);
  }

  return ans;
};

```
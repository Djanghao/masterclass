# Efficient solution with BigInt || JavaScript Solution ✅ 😎

**Author:** astiksarathe
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/3593996/](https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/solutions/3593996/)

---


# Code
```
/**
 * @param {string} number
 * @param {character} digit
 * @return {string}
 */
var removeDigit = function(number, digit) {
  let largestNum = 0n; 

  for (let ind = 0; ind < number.length; ind++) {
    if (number[ind] === digit) {
      const numString = number.substring(0, ind) + number.substring(ind + 1); 
      const num = BigInt(numString); 
      if (num > largestNum) largestNum = num; 
    }
  }

  return largestNum.toString();
};

```
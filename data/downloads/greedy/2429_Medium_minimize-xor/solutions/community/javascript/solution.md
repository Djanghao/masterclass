# [Javascript] Find N Most Significant Bits in num1

**Author:** anna-hcj
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-xor/solutions/2648656/](https://leetcode.com/problems/minimize-xor/solutions/2648656/)

---

**Solution: Greedy - N Most Significant Bits in num1**

Find `n`, the number of 1-bits in `num2`.

Create a number with the `n` most significant bits of `num1`. 
  (Since `1^1 = 0`, we will be minimizing the result by removing the most significant bits)

If `num1` has less than `n` 1-bits, take the least significant bits.
  (If there are no bits to remove, we need to take the bits that add the least value)

Time Complexity: `O(32)` = `O(1)`
Space Complexity: `O(1)`
```
var minimizeXor = function(num1, num2) {
  let n = countOnes(num2), res = 0, ones = 0;
  // Take the most significant 1-bits in num1
  for (let i = 31; i >= 0; i--) { 
    if (ones === n) break;
    if (((num1 >> i) & 1) === 1) {
      res |= (1 << i);
      ones++;
    }
  }
  
  // Take the least significant bits if there are no more 1-bits in num1
  for (let i = 0; i <= 31; i++) {
    if (ones === n) break;
    if (((res >> i) & 1) === 1) continue;
    res |= (1 << i);
    ones++;
  }
  return res;
  
  function countOnes(num) {
    let count = 0;
    while (num > 0) {
      count += (num & 1);
      num >>= 1;
    }
    return count;
  }
};
```
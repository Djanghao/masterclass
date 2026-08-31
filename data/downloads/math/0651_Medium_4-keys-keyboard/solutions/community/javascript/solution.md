# Javascript - top down, recursive, memoization, explanation

**Author:** quadcoders
**Votes:** 4
**Link:** [https://leetcode.com/problems/4-keys-keyboard/solutions/1815026/](https://leetcode.com/problems/4-keys-keyboard/solutions/1815026/)

---

```
/** https://leetcode.com/problems/4-keys-keyboard/
 * @param {number} n
 * @return {number}
 */
var maxA = function(n) {
  // Memo
  this.memo = new Map();
  
  return dp(n, 0, 0);
};

var dp = function(n, total, buffer) {
  let key = `${n}_${total}_${buffer}`;
  
  // Base case
  if (n === 1) {
    return total + 1;
  }
  
  if (n === 2) {
    return total + Math.max(2, buffer * 2);
  }
  
  // Return from memo
  if (this.memo.has(key) === true) {
    return this.memo.get(key);
  }
  
  // Each press, there are 3 options...
  
  // Press A, doesn't make sense to press A if buffer has more than 1 count, we should press Ctrl V instead
  let pressA = 0;
  if (buffer < 2) {
    pressA = dp(n - 1, total + 1, buffer);
  }
  
  // Press Ctrl A + Ctrl C, doesn't make sense to press Ctrl A + Ctrl C if the total is less than 2 because it takes 2 press to produce Ctrl A + Ctrl C
  let pressCtrlAC = 0;
  if (total > 2) {
    pressCtrlAC = dp(n - 2, total, total);
  }
  
  // Press Ctrl V, doesn't make sense to press Ctrl V if the buffer is empty
  let pressCtrlV = 0;
  if (buffer !== 0) {
    pressCtrlV = dp(n - 1, total + buffer, buffer);
  }
  
  // Count the max
  let count = Math.max(...[pressA, pressCtrlAC, pressCtrlV]);
  
  // Set memo
  this.memo.set(key, count);
  
  return count;
};
```
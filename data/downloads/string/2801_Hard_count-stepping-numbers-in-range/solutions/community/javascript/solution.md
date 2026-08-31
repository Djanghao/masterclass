# JS - DP

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3840603/](https://leetcode.com/problems/count-stepping-numbers-in-range/solutions/3840603/)

---

# Approach
- If we completely ignore the bounding conditions from `high` and `low`, this is just a classic DP problem with this formular:
```js
dp[i][d] = 
  (d > 0? dp[i-1][d-1] : 0) + 
  (d < 9? dp[i-1][d+1]) + 
  (d > 0? 1 : 0)
```
Where `dp[i][d]` is the number of stepping numbers that has **at most** `i` digits and ends at digit `d`. The first 2 operands are intuitive, we can just append `d` to any stepping number that ends at `d-1` or `d+1`. The third operand means that `d` itself can be a stepping number.
- Now, let's define a function `calc(x)` to calculate all stepping numbers that doesn't exceed `x`. The answer to the original problem can be rewritten as `calc(high) - calc(low-1)`. Therefore, we don't have to care about the lower bound anymore!
- Dealing with the upper bound is quite tricky. The key observation is if we are meeting the bound at `i-1`-th digit, then we can only append digits that are less than or equal to `x[i]`, otherwise our number would exceed the upper bound. In addition, we meet the bound at `i-1`-th digit, and `abs(x[i]-x[i-1]) === 1`, we will continue to meet the bound at `i`-th digit. I denote the state **meeting upper bound at `i`** as `dp[i][10]`.
- Instead of finding `calc(high) - calc(low-1)`, we can actually use `calc(high) - calc(low) + checkStepping(low)`, in which `checkStepping(x)` return 1 if `x` is a stepping number and return 0 otherwise. This is because calculating `low-1` may not be as efficient as finding `checkStepping(low)`.

# Complexity
- Time complexity: $$O(high.length)$$
- Space complexity: $$O(high.length)$$

# Code
```js
const MOD = 1000000007;
/**
 * @param {string} low
 * @param {string} high
 * @return {number}
 */
var countSteppingNumbers = function (low, high) {
  const dp = [];
  for (let i = 0; i < high.length; i++) dp.push(Array(11).fill(0));

  /**
   *
   * @param {string} low
   */
  function checkStepping(low) {
    for (let i = 1; i < low.length; i++) if (Math.abs(low[i].charCodeAt() - low[i - 1].charCodeAt()) !== 1) return 0;
    return 1;
  }

  /**
   * @param {string} high
   */
  function calc(high) {
    let digit = high[0].charCodeAt() - 48;
    dp[0][0] = 0;
    for (let d = 1; d < 10; d++) {
      if (d < digit) dp[0][d] = 1;
      else if (d === digit) {
        dp[0][10] = 1;
        dp[0][d] = 0;
      }
      else dp[0][d] = 0;
    }

    for (let i = 1; i < high.length; i++) {
      digit = high[i].charCodeAt() - 48;

      dp[i][0] = 0;
      dp[i][10] = 0;
      for (let d = 1; d < 10; d++) dp[i][d] = 1;
      for (let d = 0; d < 10; d++) {
        if (d > 0) dp[i][d] = (dp[i][d] + dp[i - 1][d - 1]) % MOD;
        if (d < 9) dp[i][d] = (dp[i][d] + dp[i - 1][d + 1]) % MOD;
      }
      if (dp[i - 1][10]) {
        const preDigit = high[i - 1].charCodeAt() - 48;
        if (preDigit > 0 && preDigit - 1 <= digit) {
          if (preDigit - 1 === digit) dp[i][10] = 1;
          else dp[i][preDigit - 1] = (dp[i][preDigit - 1] + 1) % MOD;
        }
        if (preDigit < Math.min(9, digit)) {
          if (preDigit + 1 === digit) dp[i][10] = 1;
          else dp[i][preDigit + 1] = (dp[i][preDigit + 1] + 1) % MOD;
        }
      }
    }

    let result = 0;
    for (let d = 0; d < 11; d++) result = (result + dp[high.length - 1][d]) % MOD;
    return result;
  }

  return (calc(high) - calc(low) + checkStepping(low) + MOD) % MOD;
};
```
# Improvements made based on Yowaimo's great idea

**Author:** Gang-Li
**Votes:** 3
**Link:** [https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3211495/](https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3211495/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Gang make some improvements:
1. Rename some variables for better meaning.

2. Make the logic of count ans variable more understandable
   Inside dfs function, make change
     Before: if (ind === LEN) return 1;
     After:  if (ind === LEN) return 0;
   Then add ans++ line to increase the ans value when product of runningMask and mask creates a square free number
   Finally, remove the -1 operation from line return dfs(0, 0, nums);

3. Change runningMask initial value from 1 to 0, and inside getMask function, shift mask by i instead of i + 1,
   this will save the memory space and more meaningful.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Based on the idea/code from Yowaimo's great idea:
 * https://leetcode.com/problems/count-the-number-of-square-free-subsets/solutions/3203707/dp-bitmask-c-prime-factorization/?orderBy=most_votes
 * 
 * @param {number[]} nums
 * @return {number}
 */
var squareFreeSubsets = function (nums) {
  const LEN = nums.length;
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];

  function getMask(num) {
    let mask = 0;
    for (let i = 0; i < 10; i++) {
      let samePrimeCount = 0;
      while (num % primes[i] === 0) {
        samePrimeCount += 1;
        num /= primes[i];
      }
      if (samePrimeCount > 1) return -1; // if a number is getting divided with a prime more than 1 time meaning it can be divided by that primes square
      if (samePrimeCount === 1) mask |= 1 << i; // i + 1 because the for i === 0 product 1 has already been taken
    }
    return mask;
  }

  function dfs(ind, runningMask, nums) {
    if (ind === LEN) return 0;
    if (dp[ind][runningMask] !== undefined) return dp[ind][runningMask];

    let mask = getMask(nums[ind]);
    let ans = dfs(ind + 1, runningMask, nums);

    if (mask !== -1 && (runningMask & mask) === 0) {
      ans++;
      ans = (ans + dfs(ind + 1, runningMask | mask, nums)) % mod;
    }
    dp[ind][runningMask] = ans;
    return ans;
  }

  let mod = 1e9 + 7;
  let dp = [];
  for (let i = 0; i < LEN; i++) dp[i] = [];

  return dfs(0, 0, nums); //
};

```
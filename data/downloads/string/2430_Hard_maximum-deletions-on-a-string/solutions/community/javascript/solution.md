# Fix runtime error by improving space complexity to O(N), based on lee215 solution

**Author:** Gang-Li
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/3096237/](https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/3096237/)

---

# Intuition
Based on lee215 solution (refer below url).
However, it will triger Runtime for JavaScript solution.
**FATAL ERROR: Scavenger: semi-space copy Allocation failed - JavaScript heap out of memory.**
Therefore, I imporved space complexity to O(N) and passed all the tests eventually. 



# Approach
https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648900/java-c-python-dp-solution/?orderBy=most_votes


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * Based on the idea/code from leetcode solution: WILL trigger Runtime error of Heap Out of memory
 * https://leetcode.com/problems/maximum-deletions-on-a-string/solutions/2648900/java-c-python-dp-solution/?orderBy=most_votes
 *
 * @param {string} s
 * @return {number}
 */
var deleteString = function (s) {
  const LEN = s.length;
  let lcsPrev = Array(1 + LEN).fill(0);
  let lcsCurr = Array(1 + LEN).fill(0);

  let dp = Array(1 + LEN).fill(1);
  for (let i = LEN - 1; i >= 0; i--) {
    for (let j = 1 + i; j < LEN; j++) {
      if (s[i] === s[j]) lcsCurr[j] = 1 + lcsPrev[j + 1];

      if (lcsCurr[j] >= j - i) dp[i] = Math.max(dp[i], 1 + dp[j]);
    }

    for (let i = 0; i <= LEN; i++) lcsPrev[i] = lcsCurr[i];
    for (let i = 0; i <= LEN; i++) lcsCurr[i] = 0;
  }

  return dp[0];
};
```
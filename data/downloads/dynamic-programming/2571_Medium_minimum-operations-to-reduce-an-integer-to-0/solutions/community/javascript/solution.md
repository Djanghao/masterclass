# Based on great idea from Alpha_690163.

**Author:** Gang-Li
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3204266/](https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0/solutions/3204266/)

---

# Intuition
Comments:
When n is even number, divide by 2 (operation no change)
When n is odd number, operation count added by 1
If n is 1 (base case) or last 2 digits of n is 01, minus n by 1
else add n by 1.
The logic behind choose add 1 or minus 1, is how to make last 2 digit to 0

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
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  let oneArr = [];
  let ans = 0;
  while (n !== 0) {
    if (n % 2 === 1) {
      ans++;
      if (n === 1 || (n & 2) === 0) n--;
      else n++;
    } else n /= 2;
  }

  return ans;
};

```
# One-Liner Javascript solution

**Author:** carlosgreen
**Votes:** 4
**Link:** [https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3346236/](https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3346236/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Shamelessly stolen:
https://leetcode.com/problems/k-items-with-the-maximum-sum/solutions/3342004/one-liner/

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
  return Math.min(k, numOnes) - Math.max(0, k - numZeros - numOnes)
};
```
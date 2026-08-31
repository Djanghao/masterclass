# my_sumOfMultiples

**Author:** RinatMambetov
**Votes:** 5
**Link:** [https://leetcode.com/problems/sum-multiples/solutions/3480901/](https://leetcode.com/problems/sum-multiples/solutions/3480901/)

---

<!-- # Intuition -->
<!-- Describe your first thoughts on how to solve this problem. -->

<!-- # Approach -->
<!-- Describe your approach to solving the problem. -->

<!-- # Complexity
- Time complexity: -->
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

<!-- - Space complexity: -->
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function (n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      sum += i;
    }
  }

  return sum;
};
```